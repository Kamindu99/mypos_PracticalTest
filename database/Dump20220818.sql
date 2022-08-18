-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: test_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `invoice_details`
--

DROP TABLE IF EXISTS `invoice_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_details` (
  `Invoice_Details_Id` int NOT NULL,
  `Invoice_Details_qty` int NOT NULL,
  `Invoice_Details_amount` double NOT NULL,
  `Invoice_Hed_Invoice_Hed_id` int NOT NULL,
  `Products_Products_id` int NOT NULL,
  PRIMARY KEY (`Invoice_Details_Id`),
  KEY `Products_Products_id` (`Products_Products_id`),
  KEY `Invoice_Hed_Invoice_Hed_id_idx` (`Invoice_Hed_Invoice_Hed_id`),
  CONSTRAINT `Invoice_Hed_Invoice_Hed_id` FOREIGN KEY (`Invoice_Hed_Invoice_Hed_id`) REFERENCES `invoice_hed` (`Invoice_Hed_id`),
  CONSTRAINT `Products_Products_id` FOREIGN KEY (`Products_Products_id`) REFERENCES `products` (`Products_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_details`
--

LOCK TABLES `invoice_details` WRITE;
/*!40000 ALTER TABLE `invoice_details` DISABLE KEYS */;
INSERT INTO `invoice_details` VALUES (1,123,2000,1,1);
/*!40000 ALTER TABLE `invoice_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_hed`
--

DROP TABLE IF EXISTS `invoice_hed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_hed` (
  `Invoice_Hed_id` int NOT NULL AUTO_INCREMENT,
  `Invoice_Hed_Date` datetime NOT NULL,
  `Invoice_Hed_Amount` double NOT NULL,
  `Invoice_Hed_customer` varchar(45) NOT NULL,
  PRIMARY KEY (`Invoice_Hed_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_hed`
--

LOCK TABLES `invoice_hed` WRITE;
/*!40000 ALTER TABLE `invoice_hed` DISABLE KEYS */;
INSERT INTO `invoice_hed` VALUES (1,'2000-01-01 02:10:00',20,'Wanigasinghe'),(2,'2002-01-01 02:10:00',20,'Hansani'),(3,'2002-01-01 02:10:00',20,'Hansani'),(4,'2009-01-01 02:10:00',20,'Hansani T');
/*!40000 ALTER TABLE `invoice_hed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Products_id` int NOT NULL,
  `Products_Name` varchar(45) NOT NULL,
  `Products_price` varchar(45) NOT NULL,
  `Products_qty` int NOT NULL,
  PRIMARY KEY (`Products_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Kamindu','Rs 100',100),(2,'Gayantha','Rs 200',900),(3,'abc','100',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-18  6:47:04
