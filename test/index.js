const assert = require('assert');

const { masking, show } = require('../index.js');

describe('index.js', () => {
  describe('#masking()', () => {
    it('should 176****0926', () => {
      const res = masking('17673040926', 3, 7);
      assert.equal(res, '176****0926');
    });

    it('should 176****0926', () => {
      const res = masking('17673040926', -1, 11);
      assert.equal(res, '1767304092*');
    });

    it('should 176####0926', () => {
      const res = masking('17673040926', 3, 7, '#');
      assert.equal(res, '176####0926');
    });

  });

  describe('#show()', () => {
    it('should 张**', () => {
      const res = show('张三丰', 0, 1);
      assert.equal(res, '张**');
    });

    it('should **丰', () => {
      const res = show('张三丰', -1);
      assert.equal(res, '**丰');
    });

    it('should 张##', () => {
      const res = show('张三丰', 0, 1, '#');
      assert.equal(res, '张##');
    });

    it('should 张##', () => {
      const res = show('张三丰', 1);
      assert.equal(res, '*三丰');
    });
  });
});
