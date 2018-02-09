/*
Navicat MySQL Data Transfer

Source Server         : bean
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bean_project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:42:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(10) unsigned NOT NULL,
  `count` varchar(255) NOT NULL,
  `qty` int(10) unsigned NOT NULL,
  `creatime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('1', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '158', '(7.8折)', '1', '2018-02-09 16:23:42');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `count` varchar(255) NOT NULL,
  `creatime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/list1.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '158.00', '(7.8折)', '2018-02-08 01:23:04');
INSERT INTO `goods` VALUES ('2', '../img/list2.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '221.00', '(6.8折)', '2018-02-08 01:24:17');
INSERT INTO `goods` VALUES ('3', '../img/list3.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '45.00', '(7.1折)', '2018-02-08 01:24:49');
INSERT INTO `goods` VALUES ('4', '../img/list4.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '192.00', '(5.8折)', '2018-02-08 01:25:16');
INSERT INTO `goods` VALUES ('5', '../img/list5.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '212.00', '(7.8折)', '2018-02-08 01:25:55');
INSERT INTO `goods` VALUES ('6', '../img/list6.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '12.00', '(7.1折)', '2018-02-08 01:36:50');
INSERT INTO `goods` VALUES ('7', '../img/list7.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '46.00', '(5.8折)', '2018-02-08 01:26:53');
INSERT INTO `goods` VALUES ('8', '../img/list8.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '75.00', '(7.9折)', '2018-02-08 01:27:25');
INSERT INTO `goods` VALUES ('9', '../img/list9.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '88.00', '(5.8折)', '2018-02-08 01:27:56');
INSERT INTO `goods` VALUES ('10', '../img/list10.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '23.00', '(7.1折)', '2018-02-09 01:55:06');
INSERT INTO `goods` VALUES ('11', '../img/list11.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '14.00', '(7.1折)', '2018-02-08 01:36:56');
INSERT INTO `goods` VALUES ('12', '../img/list12.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '45.00', '(7.8折)', '2018-02-08 01:36:59');
INSERT INTO `goods` VALUES ('13', '../img/list13.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '67.00', '(7.1折)', '2018-02-08 01:37:05');
INSERT INTO `goods` VALUES ('14', '../img/list14.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '92.00', '(5.8折)', '2018-02-08 01:37:08');
INSERT INTO `goods` VALUES ('15', '../img/list15.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '22.00', '(7.8折)', '2018-02-08 01:37:11');
INSERT INTO `goods` VALUES ('16', '../img/list16.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '190.00', '(7.1折)', '2018-02-08 01:37:15');
INSERT INTO `goods` VALUES ('17', '../img/list17.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '87.00', '(5.8折)', '2018-02-08 01:37:19');
INSERT INTO `goods` VALUES ('18', '../img/list18.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '76.00', '(7.9折)', '2018-02-08 01:37:22');
INSERT INTO `goods` VALUES ('19', '../img/list19.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '85.00', '(5.8折)', '2018-02-08 01:37:26');
INSERT INTO `goods` VALUES ('20', '../img/list20.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '84.00', '(7.9折)', '2018-02-08 01:37:31');
INSERT INTO `goods` VALUES ('21', '../img/list21.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '83.00', '(5.8折)', '2018-02-08 01:37:34');
INSERT INTO `goods` VALUES ('22', '../img/list22.jpg', 'kiehl\'s 科颜氏（契尔氏）金盏花舒缓保湿面膜 100ml', '23.00', '(7.1折)', '2018-02-08 01:36:01');
INSERT INTO `goods` VALUES ('23', '../img/list23.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '76.00', '(7.1折)', '2018-02-08 01:37:39');
INSERT INTO `goods` VALUES ('24', '../img/list24.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '73.00', '(7.8折)', '2018-02-08 01:37:46');
INSERT INTO `goods` VALUES ('25', '../img/list25.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '16.00', '(7.1折)', '2018-02-08 01:37:50');
INSERT INTO `goods` VALUES ('26', '../img/list26.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '63.00', '(7.8折)', '2018-02-08 01:37:53');
INSERT INTO `goods` VALUES ('27', '../img/list27.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '69.00', '(7.1折)', '2018-02-08 01:37:55');
INSERT INTO `goods` VALUES ('28', '../img/list28.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '65.00', '(5.8折)', '2018-02-08 01:37:59');
INSERT INTO `goods` VALUES ('29', '../img/list29.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '43.00', '(7.8折)', '2018-02-08 01:38:03');
INSERT INTO `goods` VALUES ('30', '../img/list30.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '10.00', '(7.1折)', '2018-02-08 01:38:08');
INSERT INTO `goods` VALUES ('31', '../img/list5.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '389.00', '(5.8折)', '2018-02-08 01:39:17');
INSERT INTO `goods` VALUES ('32', '../img/list5.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '298.00', '(7.9折)', '2018-02-08 01:39:25');
INSERT INTO `goods` VALUES ('33', '../img/list7.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '899.00', '(5.8折)', '2018-02-08 01:38:24');
INSERT INTO `goods` VALUES ('34', '../img/list27.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '751.00', '(7.9折)', '2018-02-08 01:39:32');
INSERT INTO `goods` VALUES ('35', '../img/list9.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '31.00', '(5.8折)', '2018-02-08 01:38:31');
INSERT INTO `goods` VALUES ('36', '../img/list19.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '85.00', '(5.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('37', '../img/list20.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '84.00', '(7.9折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('38', '../img/list21.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '83.00', '(5.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('39', '../img/list22.jpg', 'kiehl\'s 科颜氏（契尔氏）金盏花舒缓保湿面膜 100ml', '23.00', '(7.1折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('40', '../img/list23.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '76.00', '(7.1折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('41', '../img/list24.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '73.00', '(7.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('42', '../img/list25.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '16.00', '(7.1折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('43', '../img/list26.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '63.00', '(7.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('44', '../img/list27.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '69.00', '(7.1折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('45', '../img/list28.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '65.00', '(5.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('46', '../img/list29.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '43.00', '(7.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('47', '../img/list30.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '10.00', '(7.1折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('48', '../img/list5.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '389.00', '(5.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('49', '../img/list5.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '298.00', '(7.9折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('50', '../img/list7.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '899.00', '(5.8折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('51', '../img/list27.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '751.00', '(7.9折)', '2018-02-08 01:40:07');
INSERT INTO `goods` VALUES ('52', '../img/list9.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '101.00', '(5.8折)', '2018-02-08 01:41:01');
INSERT INTO `goods` VALUES ('53', '../img/list7.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '102.00', '(5.8折)', '2018-02-08 01:41:05');
INSERT INTO `goods` VALUES ('54', '../img/list8.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '751.00', '(7.9折)', '2018-02-08 01:41:07');
INSERT INTO `goods` VALUES ('55', '../img/list9.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '881.00', '(5.8折)', '2018-02-08 01:41:08');
INSERT INTO `goods` VALUES ('56', '../img/list10.jpg', 'kiehl\'s 科颜氏（契尔氏）金盏花舒缓保湿面膜 100ml', '231.00', '(7.1折)', '2018-02-08 01:41:09');
INSERT INTO `goods` VALUES ('57', '../img/list11.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '141.00', '(7.1折)', '2018-02-08 01:41:09');
INSERT INTO `goods` VALUES ('58', '../img/list12.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '451.00', '(7.8折)', '2018-02-08 01:41:10');
INSERT INTO `goods` VALUES ('59', '../img/list13.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '671.00', '(7.1折)', '2018-02-08 01:41:11');
INSERT INTO `goods` VALUES ('60', '../img/list14.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '921.00', '(5.8折)', '2018-02-08 01:41:11');
INSERT INTO `goods` VALUES ('61', '../img/list15.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '221.00', '(7.8折)', '2018-02-08 01:41:12');
INSERT INTO `goods` VALUES ('62', '../img/list16.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '190.00', '(7.1折)', '2018-02-08 01:40:53');
INSERT INTO `goods` VALUES ('63', '../img/list17.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '871.00', '(5.8折)', '2018-02-08 01:41:13');
INSERT INTO `goods` VALUES ('64', '../img/list18.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '761.00', '(7.9折)', '2018-02-08 01:41:14');
INSERT INTO `goods` VALUES ('65', '../img/list19.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '85.00', '(5.8折)', '2018-02-08 01:40:53');
INSERT INTO `goods` VALUES ('66', '../img/list20.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '841.00', '(7.9折)', '2018-02-08 01:41:15');
INSERT INTO `goods` VALUES ('67', '../img/list21.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '831.00', '(5.8折)', '2018-02-08 01:41:16');
INSERT INTO `goods` VALUES ('68', '../img/list22.jpg', 'kiehl\'s 科颜氏（契尔氏）金盏花舒缓保湿面膜 100ml', '231.00', '(7.1折)', '2018-02-08 01:41:20');
INSERT INTO `goods` VALUES ('69', '../img/list6.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '121.00', '(7.1折)', '2018-02-08 01:42:14');
INSERT INTO `goods` VALUES ('70', '../img/list7.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '462.00', '(5.8折)', '2018-02-08 01:42:16');
INSERT INTO `goods` VALUES ('71', '../img/list8.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '753.00', '(7.9折)', '2018-02-08 01:42:17');
INSERT INTO `goods` VALUES ('72', '../img/list9.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '883.00', '(5.8折)', '2018-02-08 01:42:18');
INSERT INTO `goods` VALUES ('73', '../img/list10.jpg', 'kiehl\'s 科颜氏（契尔氏）金盏花舒缓保湿面膜 100ml', '233.00', '(7.1折)', '2018-02-08 01:42:19');
INSERT INTO `goods` VALUES ('74', '../img/list11.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '144.00', '(7.1折)', '2018-02-08 01:42:20');
INSERT INTO `goods` VALUES ('75', '../img/list12.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '454.00', '(7.8折)', '2018-02-08 01:42:20');
INSERT INTO `goods` VALUES ('76', '../img/list13.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '675.00', '(7.1折)', '2018-02-08 01:42:21');
INSERT INTO `goods` VALUES ('77', '../img/list14.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '925.00', '(5.8折)', '2018-02-08 01:42:22');
INSERT INTO `goods` VALUES ('78', '../img/list15.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '226.00', '(7.8折)', '2018-02-08 01:42:22');
INSERT INTO `goods` VALUES ('79', '../img/list16.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '192.00', '(7.1折)', '2018-02-08 01:42:27');
INSERT INTO `goods` VALUES ('80', '../img/list17.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '873.00', '(5.8折)', '2018-02-08 01:42:28');
INSERT INTO `goods` VALUES ('81', '../img/list18.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '76.00', '(7.9折)', '2018-02-08 01:42:08');
INSERT INTO `goods` VALUES ('82', '../img/list19.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '853.00', '(5.8折)', '2018-02-08 01:42:29');
INSERT INTO `goods` VALUES ('83', '../img/list20.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '844.00', '(7.9折)', '2018-02-08 01:42:30');
INSERT INTO `goods` VALUES ('84', '../img/list21.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '835.00', '(5.8折)', '2018-02-08 01:42:31');
INSERT INTO `goods` VALUES ('85', '../img/list22.jpg', 'kiehl\'s 科颜氏（契尔氏）金盏花舒缓保湿面膜 100ml', '235.00', '(7.1折)', '2018-02-08 01:42:32');
INSERT INTO `goods` VALUES ('86', '../img/list23.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '766.00', '(7.1折)', '2018-02-08 01:42:33');
INSERT INTO `goods` VALUES ('87', '../img/list13.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '675.00', '(7.1折)', '2018-02-08 01:42:52');
INSERT INTO `goods` VALUES ('88', '../img/list14.jpg', 'Kiehl’s 科颜氏(契尔氏)黄瓜植物精华爽肤水(713775) 40ml', '925.00', '(5.8折)', '2018-02-08 01:42:52');
INSERT INTO `goods` VALUES ('89', '../img/list15.jpg', 'Kiehl’s科颜氏(契尔氏)蓝色草本净肤水(721602) 250ml', '226.00', '(7.8折)', '2018-02-08 01:42:52');
INSERT INTO `goods` VALUES ('90', '../img/list16.jpg', 'Kiehl’s 科颜氏(契尔氏)酪梨眼霜(牛油果眼霜) 14g', '112.00', '(7.1折)', '2018-02-08 01:43:31');
INSERT INTO `goods` VALUES ('91', '../img/list17.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '823.00', '(5.8折)', '2018-02-08 01:43:33');
INSERT INTO `goods` VALUES ('92', '../img/list18.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '763.00', '(7.9折)', '2018-02-08 01:43:35');
INSERT INTO `goods` VALUES ('93', '../img/list19.jpg', 'Kiehl’s 科颜氏(契尔氏)氨基椰香护发乳液/护发素(265670) 限期19.01 清仓特', '823.00', '(5.8折)', '2018-02-08 01:43:38');
INSERT INTO `goods` VALUES ('94', '../img/list20.jpg', 'Kiehl’s 科颜氏(契尔氏)芫荽橙萃净澈防护面膜(小样) 清仓特价！ 14ml', '824.00', '(7.9折)', '2018-02-08 01:43:40');
INSERT INTO `goods` VALUES ('95', '../img/list21.jpg', 'Kiehl’s 科颜氏(契尔氏)集焕白均衡亮肤淡斑精华液/小样 4ml', '825.00', '(5.8折)', '2018-02-08 01:43:42');

-- ----------------------------
-- Table structure for goodtext
-- ----------------------------
DROP TABLE IF EXISTS `goodtext`;
CREATE TABLE `goodtext` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `mainword` varchar(255) NOT NULL,
  `goodname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodtext
-- ----------------------------
INSERT INTO `goodtext` VALUES ('1', '../img/box1a.jpg', '享誉全球的明星爽肤水！', 'Kiehl’s 科颜氏金盏花植物精华化妆水');
INSERT INTO `goodtext` VALUES ('2', '../img/box1b.jpg', '十大明星产品之一，畅销全球！', 'Kiehl’s 科颜氏酪梨眼霜14g');
INSERT INTO `goodtext` VALUES ('3', '../img/box1c.jpg', '卓越口碑保湿之星！', 'Kiehl’s 科颜氏角鲨烷保湿面霜50ml');
INSERT INTO `goodtext` VALUES ('4', '../img/box1d.jpg', '滴滴点亮，无暇润白', '科颜氏集焕白均衡亮肤淡斑精华液 ');
INSERT INTO `goodtext` VALUES ('5', '../img/box1d.jpg', '排毒、净化毛孔、深层清洁！', '科颜氏集焕白均衡亮肤淡斑精华液 ');

-- ----------------------------
-- Table structure for log_reg
-- ----------------------------
DROP TABLE IF EXISTS `log_reg`;
CREATE TABLE `log_reg` (
  `username` varchar(255) NOT NULL,
  `passward` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log_reg
-- ----------------------------
INSERT INTO `log_reg` VALUES ('kobe123', '12345678', null);
INSERT INTO `log_reg` VALUES ('james123', '00000000', null);
INSERT INTO `log_reg` VALUES ('aaa', 'aaa', null);
INSERT INTO `log_reg` VALUES ('aaaa', 'aaaa', null);
INSERT INTO `log_reg` VALUES ('', '', null);
INSERT INTO `log_reg` VALUES ('asd', 'asd', null);
INSERT INTO `log_reg` VALUES ('nimabi', 'nimabi', null);
INSERT INTO `log_reg` VALUES ('ssdedede', 'nimabi', null);
INSERT INTO `log_reg` VALUES ('ssdededede', 'nimabi', null);
INSERT INTO `log_reg` VALUES ('sadadeev', 'aaaaaa', null);
INSERT INTO `log_reg` VALUES ('fsffsfsfs', 'aaaaaa', null);
INSERT INTO `log_reg` VALUES ('marco1', '000000', null);
INSERT INTO `log_reg` VALUES ('kobebryant', '111111', null);
SET FOREIGN_KEY_CHECKS=1;
