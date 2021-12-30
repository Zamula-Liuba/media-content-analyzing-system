-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sjdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sjdb` ;

-- -----------------------------------------------------
-- Schema sjdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sjdb` ;
USE `sjdb` ;

-- -----------------------------------------------------
-- Table `sjdb`.`Admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Admin` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Admin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`Mentor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Mentor` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Mentor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` INT NULL,
  `Admin_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Mentor_Admin_idx` (`Admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_Mentor_Admin`
    FOREIGN KEY (`Admin_id`)
    REFERENCES `sjdb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`SurveyAction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`SurveyAction` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`SurveyAction` (
  `at` DATETIME NOT NULL,
  PRIMARY KEY (`at`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`User` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` INT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `mail` VARCHAR(45) NULL,
  `Mentor_id` INT NOT NULL,
  `SurveyAction_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_User_Mentor1_idx` (`Mentor_id` ASC) VISIBLE,
  INDEX `fk_User_SurveyAction1_idx` (`SurveyAction_at` ASC) VISIBLE,
  CONSTRAINT `fk_User_Mentor1`
    FOREIGN KEY (`Mentor_id`)
    REFERENCES `sjdb`.`Mentor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_SurveyAction1`
    FOREIGN KEY (`SurveyAction_at`)
    REFERENCES `sjdb`.`SurveyAction` (`at`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`Answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Answer` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Answer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Answer_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Answer_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `sjdb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`Alt`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Alt` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Alt` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `text` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`SelectedAlt`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`SelectedAlt` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`SelectedAlt` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Alt_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_SelectedAlt_Alt1_idx` (`Alt_id` ASC) VISIBLE,
  CONSTRAINT `fk_SelectedAlt_Alt1`
    FOREIGN KEY (`Alt_id`)
    REFERENCES `sjdb`.`Alt` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`Question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Question` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `text` VARCHAR(45) NULL,
  `min` INT NULL,
  `max` INT NULL,
  `Answer_id` INT NOT NULL,
  `SelectedAlt_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Question_Answer1_idx` (`Answer_id` ASC) VISIBLE,
  INDEX `fk_Question_SelectedAlt1_idx` (`SelectedAlt_id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Answer1`
    FOREIGN KEY (`Answer_id`)
    REFERENCES `sjdb`.`Answer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Question_SelectedAlt1`
    FOREIGN KEY (`SelectedAlt_id`)
    REFERENCES `sjdb`.`SelectedAlt` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`Report`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Report` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Report` (
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`date`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`SurveyState`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`SurveyState` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`SurveyState` (
  `name` INT NOT NULL AUTO_INCREMENT,
  `SurveyAction_at` DATETIME NOT NULL,
  PRIMARY KEY (`name`),
  INDEX `fk_SurveyState_SurveyAction1_idx` (`SurveyAction_at` ASC) VISIBLE,
  CONSTRAINT `fk_SurveyState_SurveyAction1`
    FOREIGN KEY (`SurveyAction_at`)
    REFERENCES `sjdb`.`SurveyAction` (`at`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`Survey`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`Survey` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`Survey` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `text` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `Question_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Survey_Question1_idx` (`Question_id` ASC) VISIBLE,
  CONSTRAINT `fk_Survey_Question1`
    FOREIGN KEY (`Question_id`)
    REFERENCES `sjdb`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sjdb`.`UserReport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sjdb`.`UserReport` ;

CREATE TABLE IF NOT EXISTS `sjdb`.`UserReport` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `text` VARCHAR(45) NULL,
  `User_id` INT NOT NULL,
  `Report_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_UserReport_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_UserReport_Report1_idx` (`Report_date` ASC) VISIBLE,
  CONSTRAINT `fk_UserReport_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `sjdb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UserReport_Report1`
    FOREIGN KEY (`Report_date`)
    REFERENCES `sjdb`.`Report` (`date`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `sjdb`.`User`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (1, 'user1', 'user1@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (2, 'user2', 'user2@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (3, 'user3', 'user3@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (4, 'user4', 'user4@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (5, 'user5', 'user5@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (6, 'user6', 'user6@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (7, 'user7', 'user7@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (8, 'user8', 'user8@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (9, 'user9', 'user9@mail.com');
INSERT INTO `sjdb`.`User` (`id`, `username`, `mail`) VALUES (10, 'user10', 'user10@mail.com');

COMMIT;

-- -----------------------------------------------------
-- Data for table `sjdb`.`Alt`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`Alt` (`id`, `type`, `text`) VALUES (1, 'minmax', '4');
INSERT INTO `sjdb`.`Alt` (`id`, `type`, `text`) VALUES (2, 'select', 'select5');
INSERT INTO `sjdb`.`Alt` (`id`, `type`, `text`) VALUES (3, 'radiobutton', '3');
INSERT INTO `sjdb`.`Alt` (`id`, `type`, `text`) VALUES (4, 'select', 'select2');
INSERT INTO `sjdb`.`Alt` (`id`, `type`, `text`) VALUES (5, 'minmax', '3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `sjdb`.`Expert`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`Expert` (`id`, `job`, `User_id`) VALUES (1, 'job1', 1);
INSERT INTO `sjdb`.`Expert` (`id`, `job`, `User_id`) VALUES (2, 'job1', 2);
INSERT INTO `sjdb`.`Expert` (`id`, `job`, `User_id`) VALUES (3, 'job2', 3);
INSERT INTO `sjdb`.`Expert` (`id`, `job`, `User_id`) VALUES (4, 'job3', 4);
INSERT INTO `sjdb`.`Expert` (`id`, `job`, `User_id`) VALUES (5, 'job2', 5);
INSERT INTO `sjdb`.`Expert` (`id`, `job`, `User_id`) VALUES (6, 'job1', 6);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sjdb`.`SelectedAlt`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (1, 2);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (2, 1);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (3, 3);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (4, 4);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (5, 4);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (6, 2);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (7, 5);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (8, 1);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (9, 2);
INSERT INTO `sjdb`.`SelectedAlt` (`id`, `Alt_id`) VALUES (10, 5);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sjdb`.`Survey`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (1, 'text1', 'typ1', 'topic1', '1970-01-01');
INSERT INTO `sjdb`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (2, 'text2', 'type2', 'topic1', '1970-01-01');
INSERT INTO `sjdb`.`Survey` (`id`, `text`, `type`, `topic`, `date`) VALUES (3, 'text3', 'type3', 'topic2', '1970-01-01');

COMMIT;



-- -----------------------------------------------------
-- Data for table `sjdb`.`SurveyState`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`SurveyState` (`id`, `name`) VALUES (1, 'Done');
INSERT INTO `sjdb`.`SurveyState` (`id`, `name`) VALUES (2, 'Progress');
INSERT INTO `sjdb`.`SurveyState` (`id`, `name`) VALUES (3, 'Checking');

COMMIT;

-- -----------------------------------------------------
-- Data for table `sjdb`.`SurveyAction`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`SurveyAction` (`id`, `at`, `Survey_id`, `SurveyState_id`) VALUES (1, '1970-01-01', 1, 1);

COMMIT;

-- -----------------------------------------------------
-- Data for table `sjdb`.`Question`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (1, 'type1', 'Question1', 1);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (2, 'type1', 'Question2', 2);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (3, 'type2', 'Question3', 2);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (4, 'type1', 'Question4', 2);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (5, 'type4', 'Question5', 2);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (6, 'type5', 'Question6', 2);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (7, 'type2', 'Question7', 1);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (8, 'type6', 'Question8', 1);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (9, 'type5', 'Question9', 1);
INSERT INTO `sjdb`.`Question` (`id`, `type`, `text`, `Survey_id`) VALUES (10, 'type5', 'Question10', 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `sjdb`.`Answer`
-- -----------------------------------------------------
START TRANSACTION;
USE `sjdb`;
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (1, 'text1', '1970-01-01', 1, 1, 1);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (2, 'text2', '1970-01-01', 1, 2, 3);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (3, 'text3', '1970-01-01', 2, 1, 5);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (4, 'text4', '1970-01-01', 2, 2, 5);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (5, 'text5', '1970-01-01', 3, 2, 5);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (6, 'text6', '1970-01-01', 4, 1, 5);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (7, 'text7', '1970-01-01', 4, 2, 1);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (8, 'text8', '1970-01-01', 5, 1, 1);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (9, 'text9', '1970-01-01', 5, 2, 2);
INSERT INTO `sjdb`.`Answer` (`id`, `text`, `date`, `Expert_id`, `Question_id`, `SelectedAlt_id`) VALUES (10, 'text10', '1970-01-01', 6, 1, 4);

COMMIT;
