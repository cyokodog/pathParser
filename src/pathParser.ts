const split = (path: string) => {
  const splitted = path.split('/');
  const baseName = splitted[splitted.length - 1];
  return {
    splitted,
    baseName,
  };
};

export const pathParser = {
  extName(path: string) {
    const { baseName } = split(path);
    const splittedName = baseName.split('.');
    return splittedName.length > 1 ? '.' + splittedName[splittedName.length - 1] : '';
  },

  dirName(path: string) {
    const { splitted } = split(path);
    const dir = splitted.slice(0, splitted.length - 1).join('/');
    return dir ? dir : '.';
  },

  baseName(path: string, ext?: string) {
    const { baseName } = split(path);
    if (!ext) return baseName;
    const exp = new RegExp(ext);
    return baseName.replace(exp, '');
  },
};
