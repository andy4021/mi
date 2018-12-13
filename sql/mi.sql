# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-13 19:19:09
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(30) NOT NULL,
  `goodsName` varchar(30) NOT NULL,
  `goodsType` varchar(30) NOT NULL,
  `goodsPrice` varchar(30) NOT NULL,
  `goodsCount` varchar(30) NOT NULL,
  `goodsDesc` varchar(30) NOT NULL,
  `goodsImg` varchar(30) NOT NULL,
  `beiyong1` varchar(30) DEFAULT NULL,
  `beiyong2` varchar(30) DEFAULT NULL,
  `beiyong3` varchar(30) DEFAULT NULL,
  `beiyong4` varchar(30) DEFAULT NULL,
  `beiyong5` varchar(30) DEFAULT NULL,
  `beiyong6` varchar(30) DEFAULT NULL,
  `beiyong7` varchar(30) DEFAULT NULL,
  `beiyong8` varchar(30) DEFAULT NULL,
  `beiyong9` varchar(30) DEFAULT NULL,
  `beiyong10` varchar(30) DEFAULT NULL,
  `beiyong11` varchar(30) DEFAULT NULL,
  `beiyong12` varchar(30) DEFAULT NULL,
  `beiyong13` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('10001','小米8青春版','手机','1399','20','潮流镜面渐变色 / 2400万自拍旗舰','../img1/small10.jpg','小米自营','有现货',NULL,'../img1/info010.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10002','小米8','手机','2499','20','全球首款双频GPS，骁龙845','../img1/small14.jpg','小米自营','有现货','2699','../img1/info014.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10003','小米8SE','手机','1699','20','三星 AMOLED 全面屏','../img1/small11.jpg','小米自营','有现货','1999','../img1/info011.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10004','红米6','手机','699','20','小屏高性能的双摄手机','../img1/small05.jpg','小米自营','有现货','799','../img1/info05.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10005','红米6A','手机','569','20','好用好看不贵','../img1/small02.jpg','小米自营','有现货','699','../img1/info02.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10006','黑鲨游戏手机 Helo','手机','3199','20','双液冷，更能打','../img1/big01.jpg','小米自营','有现货',NULL,'../img1/info05.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10007','小米MIX 2S','手机','2899','20','陶瓷机身 手机中的艺术品','../img1/small09.jpg','小米自营','有现货','3299','../img1/info09.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10008','小米8 青春版','手机','1399','20','潮流镜面渐变色，自拍旗舰','../img1/small13.jpg','小米自营','有现货',NULL,'../img1/info013.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10009','小米MIX 3','手机','3299','20','磁动力滑盖全面屏','../img1/small08.jpg','小米自营','有现货',NULL,'../img1/info08.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10010','小米8','手机','2499','20','全球首款双频GPS，骁龙845','../img1/small15.jpg','小米自营','有现货','2699','../img1/info015.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10011','小米8SE','手机','1699','20','三星 AMOLED 全面屏','../img1/small12.jpg','小米自营','有现货','1999','../img1/info012.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10012','小米6X','手机','1299','20','轻薄美观的拍照手机','../img1/small16.jpg','小米自营','有现货','1599','../img1/info016.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10013','小米MIX2S','手机','2899','20','陶瓷机身 手机中的艺术品','../img1/small07.jpg','小米自营','有现货','3299','../img1/info07.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10014','红米6','手机','699','20','小屏高性能的双摄手机','../img1/small06.jpg','小米自营','有现货','799','../img1/info06.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10015','红米6A','手机','569','20','好用好看不贵','../img1/small03.jpg','小米自营','有现货','699','../img1/info03.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10016','红米Note 5','手机','899','20','红米国民品质，拍照专家','../img1/small01.jpg','小米自营','有现货','1099','../img1/info01.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('10017','红米6 Pro','手机','869','20','高颜值大电量 红米旗舰','../img1/small04.jpg','小米自营','有现货','999','../img1/info04.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "milogin"
#

DROP TABLE IF EXISTS `milogin`;
CREATE TABLE `milogin` (
  `username` varchar(30) NOT NULL,
  `userpass` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "milogin"
#

/*!40000 ALTER TABLE `milogin` DISABLE KEYS */;
INSERT INTO `milogin` VALUES ('赵丽颖','asdf1234'),('章子怡','asdf1234'),('鞠婧祎','asdf1234'),('王菲菲','asdf1234'),('彭于晏','asdf1234'),('火箭少女','asdf1234'),('猪八戒','asdf1234'),('张学友','asdf1234'),('陈辉辉','asdf1234'),('白晨研','asdf1234'),('王小利','asdf1234'),('李美丽','asdf1234'),('薛哈哈','xuehe0605.');
/*!40000 ALTER TABLE `milogin` ENABLE KEYS */;

#
# Structure for table "shoppcart1"
#

DROP TABLE IF EXISTS `shoppcart1`;
CREATE TABLE `shoppcart1` (
  `goodsId` varchar(30) NOT NULL,
  `src` varchar(30) NOT NULL,
  `goodsName` varchar(30) NOT NULL,
  `recentprice` varchar(30) NOT NULL,
  `count` varchar(30) NOT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppcart1"
#

/*!40000 ALTER TABLE `shoppcart1` DISABLE KEYS */;
INSERT INTO `shoppcart1` VALUES ('10003','../img1/small01.jpg','899','','1'),('NaN','../img1/small05.jpg','699','','1');
/*!40000 ALTER TABLE `shoppcart1` ENABLE KEYS */;
