const Base = require('./base.js');
const fs = require('fs');
const _ = require('lodash');

module.exports = class extends Base {
  indexAction() {
    this.body = 'OK';
  }

  async infoAction() {
    const userInfo = await this.model('user').where({mobile: '13581506320'}).find();
    delete userInfo.password;
    return this.json(userInfo);
  }

  /**
   * 保存用户头像
   * @returns {Promise.<void>}
   */
  async saveAvatarAction() {
    const avatar = this.file('avatar');
    if (think.isEmpty(avatar)) {
      return this.fail('保存失败');
    }

    const avatarPath = this.RESOURCE_PATH + '/static/user/avatar/1.' + _.last(_.split(avatar, '.'));
    fs.rename(avatar.path, avatarPath, function(res) {
      return this.success(res);
    });
  }
};
