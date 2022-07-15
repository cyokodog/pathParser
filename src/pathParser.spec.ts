import * as path from 'path';
import { pathParser } from './pathParser';

describe('pathParser', () => {
  const test = (pathText: string, ext?: string) => {
    it('path.basenameと同じ値になる', () => {
      expect(pathParser.baseName(pathText)).toBe(path.basename(pathText));
      expect(pathParser.baseName(pathText, ext)).toBe(path.basename(pathText, ext));
    });

    it('path.dirnameと同じ値になる', () => {
      expect(pathParser.dirName(pathText)).toBe(path.dirname(pathText));
    });

    it('path.extnameと同じ値になる', () => {
      expect(pathParser.extName(pathText)).toBe(path.extname(pathText));
    });
  };

  test('aaa/bbb/ccc.js');
  test('./ccc.js');
  test('ccc.js');
  test('ccc');

  test('aaa/bbb/ccc.js', '.js');
  test('aaa/bbb/ccc.js', 'js');
  test('aaa/bbb/ccc.js', '.txt');
  test('aaa/bbb/ccc.js', 'txt');
  test('aaa/bbb/ccc', '.js');
});
