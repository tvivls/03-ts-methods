enum VisibilityEnum {
  Visible='visible',
  Hidden='hidden',
}

const buildPromise = (isVisible?: VisibilityEnum) => new Promise<boolean>((resolve) => {
  const handleVisibility = () => {
    document.removeEventListener('visibilitychange', handleVisibility);
    resolve(isVisible
        ? document.visibilityState === isVisible
        : document.visibilityState === VisibilityEnum.Visible,
    );
  };
  document.addEventListener('visibilitychange', handleVisibility);
});

const visibilityState = (visibilityState: VisibilityEnum) => {
  if (document.visibilityState === visibilityState)
    return Promise.resolve(true);
  return buildPromise(visibilityState);
};

export const visible = () => visibilityState(VisibilityEnum.Visible);

export const hidden = () => visibilityState(VisibilityEnum.Hidden);

export const visibilityChange = () => buildPromise();
