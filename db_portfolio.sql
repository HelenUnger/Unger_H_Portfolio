-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 08, 2018 at 10:56 PM
-- Server version: 5.7.21
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

DROP TABLE IF EXISTS `tbl_project`;
CREATE TABLE IF NOT EXISTS `tbl_project` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(100) NOT NULL,
  `project_desc` text NOT NULL,
  `project_main_img` varchar(30) NOT NULL,
  `project_img1` varchar(30) NOT NULL,
  `project_img2` varchar(30) NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`project_id`, `project_name`, `project_desc`, `project_main_img`, `project_img1`, `project_img2`) VALUES
(1, 'Creative Infuser Bottle Model', 'For this project I had to design a functional water bottle, and create it in Cinema 4D. I then had to create a video using the model.', 'bottle.jpg', 'bottle1.jpg', 'bottle2.jpg'),
(2, 'Reactr Website', 'I was asked to learn Laravel in just a few weeks to prepare for this project. I was the back-end developer of the project and was able to complete phase one. I even had time to create a fully functioning content management system.', 'reactr.jpg', 'reactr1.jpg', 'reactr2.jpg'),
(3, 'Starship Troopers: Game', 'The assignment was to create a game in JavaScript based on the movie Starship Troopers. It is a spin off of wack a mole but with bugs. It has 3 levels that progressively gets faster.', 'game.jpg', 'game1.jpg', 'game2.jpg'),
(4, 'Graffiti Assignment', 'I had to draw a graffiti design and create it in Illustrator then Photoshop it onto a wall.', 'graffiti.jpg', 'graffiti1.jpg', 'graffiti2.jpg'),
(5, 'Makeup Advertising Model', 'I was given wireframes of makeup and had to recreate them in Cinema 4D along with a few edited style frames.', 'makeup.jpg', 'makeup1.jpg', 'makeup2.jpg'),
(6, 'Planet Infographic', 'I had to create an interactive info graphic that connected to a database and retrieves data using the Fetch API.', 'planets.jpg', 'planet1.jpg', 'planet2.jpg'),
(7, 'Tattoo Assignment', 'I had to draw a tattoo design and create it in Illustrator then Photoshop it onto myself.', 'tattoo.jpg', 'tattoo1.jpg', 'tattoo2.jpg'),
(8, 'duo-portfolio', 'I created a mini portfolio that was about a designer and a developer. I made it a one page interactive site.', 'duo-portfolio.jpg', 'duo-portfolio1.jpg', 'duo-portfolio2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project_type`
--

DROP TABLE IF EXISTS `tbl_project_type`;
CREATE TABLE IF NOT EXISTS `tbl_project_type` (
  `project_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  PRIMARY KEY (`project_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_project_type`
--

INSERT INTO `tbl_project_type` (`project_type_id`, `project_id`, `type_id`) VALUES
(1, 1, 4),
(2, 2, 2),
(3, 3, 1),
(4, 4, 3),
(5, 5, 4),
(6, 6, 2),
(7, 7, 3),
(8, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_type`
--

DROP TABLE IF EXISTS `tbl_type`;
CREATE TABLE IF NOT EXISTS `tbl_type` (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(10) NOT NULL,
  PRIMARY KEY (`type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_type`
--

INSERT INTO `tbl_type` (`type_id`, `type_name`) VALUES
(1, 'frontend'),
(2, 'backend'),
(3, 'design'),
(4, 'modelling');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
