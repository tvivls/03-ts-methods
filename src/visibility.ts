enum VisibilityEnum {
  Visible = 'visible',
  Hidden = 'hidden',
}

const buildPromise = (visibilityState?: VisibilityEnum) => new Promise<boolean>((resolve) => {
  const handleVisibility = () => {
    document.removeEventListener('visibilitychange', handleVisibility);
    resolve(visibilityState
        ? document.visibilityState === visibilityState
        : document.visibilityState === VisibilityEnum.Visible,
    );
  };
  document.addEventListener('visibilitychange', handleVisibility);
});

const checkVisibilityState = (visibilityState: VisibilityEnum) => document.visibilityState === visibilityState
  ? Promise.resolve(true)
  : buildPromise(visibilityState);

export const visible = () => checkVisibilityState(VisibilityEnum.Visible);

export const hidden = () => checkVisibilityState(VisibilityEnum.Hidden);

export const visibilityChange = () => buildPromise();
