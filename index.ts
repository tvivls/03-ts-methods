type VisibilityType = 'visible' | 'hidden';

const buildPromise = (isVisible: VisibilityType | boolean) => new Promise<boolean>((resolve) => {
    const handleVisibility = () => {
        document.removeEventListener('visibilitychange', handleVisibility);
        switch (typeof isVisible) {
            case 'boolean':
                resolve(document.visibilityState === 'visible');
                break;
            case 'string':
                resolve(document.visibilityState === isVisible);
                break;
        }
    };
    document.addEventListener('visibilitychange', handleVisibility);
});

export const visible = () => {
    if (document.visibilityState === 'visible')
        return Promise.resolve(true);
    return buildPromise('visible');
};

export const hidden = () => {
    if (document.visibilityState === 'hidden')
        return Promise.resolve(true);
    return buildPromise('hidden');
};

export const visibilityChange = () => buildPromise(document.visibilityState === 'visible');
