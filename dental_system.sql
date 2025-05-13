-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2025 at 02:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dental_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `appointment_id` int(11) NOT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `date` datetime NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`appointment_id`, `patient_id`, `date`, `status`) VALUES
(1, 1, '2024-03-20 09:00:00', 'Scheduled'),
(2, 2, '2024-03-20 11:00:00', 'Scheduled'),
(3, 3, '2024-03-20 14:00:00', 'Scheduled'),
(4, 4, '2024-03-19 10:00:00', 'Completed'),
(5, 5, '2024-03-19 13:00:00', 'Completed'),
(6, 6, '2024-03-19 15:00:00', 'Completed'),
(7, 7, '2024-03-18 09:30:00', 'Completed'),
(8, 1, '2024-03-18 11:30:00', 'Completed'),
(9, 2, '2024-03-18 14:30:00', 'Completed'),
(10, 3, '2024-03-17 10:30:00', 'Completed'),
(11, 4, '2024-03-17 13:30:00', 'Completed'),
(12, 5, '2024-03-17 15:30:00', 'Completed'),
(13, 6, '2024-03-16 09:00:00', 'Completed'),
(14, 7, '2024-03-16 11:00:00', 'Completed'),
(15, 8, '2024-03-16 14:00:00', 'Completed'),
(16, 1, '2025-05-08 00:00:00', 'Completed'),
(17, 2, '2025-05-09 00:00:00', 'Scheduled'),
(18, 3, '2025-05-10 00:00:00', 'Completed'),
(19, 1, '2025-05-11 00:00:00', 'Scheduled'),
(20, 2, '2025-05-12 00:00:00', 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patient_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`patient_id`, `name`, `age`, `gender`, `created_at`) VALUES
(1, 'John Smith', 35, 'Male', '2025-05-12 11:13:11'),
(2, 'Maria Garcia', 28, 'Female', '2025-05-12 11:13:11'),
(3, 'Robert Johnson', 45, 'Male', '2025-05-12 11:13:11'),
(4, 'Sarah Williams', 32, 'Female', '2025-05-12 11:13:11'),
(5, 'Michael Brown', 50, 'Male', '2025-05-12 11:13:11'),
(6, 'Emily Davis', 25, 'Female', '2025-05-12 11:13:11'),
(7, 'David Wilson', 40, 'Male', '2025-05-12 11:13:11'),
(8, 'Lisa Anderson', 30, 'Female', '2025-05-12 11:13:11');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`payment_id`, `appointment_id`, `amount`, `date`) VALUES
(1, 1, 0.00, NULL),
(2, 2, 0.00, NULL),
(3, 3, 0.00, NULL),
(4, 4, 100.00, '2024-03-19 10:30:00'),
(5, 5, 300.00, '2024-03-19 13:30:00'),
(6, 6, 150.00, '2024-03-19 15:30:00'),
(7, 7, 100.00, '2024-03-18 10:00:00'),
(8, 8, 200.00, '2024-03-18 12:00:00'),
(9, 9, 150.00, '2024-03-18 14:00:00'),
(10, 10, 100.00, '2024-03-17 11:00:00'),
(11, 11, 300.00, '2024-03-17 14:00:00'),
(12, 12, 150.00, '2024-03-17 16:00:00'),
(13, 13, 100.00, '2024-03-16 09:30:00'),
(14, 14, 200.00, '2024-03-16 11:30:00'),
(15, 15, 150.00, '2024-03-16 14:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `treatments`
--

CREATE TABLE `treatments` (
  `treatment_id` int(11) NOT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `treatments`
--

INSERT INTO `treatments` (`treatment_id`, `appointment_id`, `type`, `cost`) VALUES
(1, 1, 'Cleaning', 100.00),
(2, 2, 'Filling', 150.00),
(3, 3, 'Extraction', 200.00),
(4, 4, 'Cleaning', 100.00),
(5, 5, 'Root Canal', 300.00),
(6, 6, 'Filling', 150.00),
(7, 7, 'Cleaning', 100.00),
(8, 8, 'Extraction', 200.00),
(9, 9, 'Filling', 150.00),
(10, 10, 'Cleaning', 100.00),
(11, 11, 'Root Canal', 300.00),
(12, 12, 'Filling', 150.00),
(13, 13, 'Cleaning', 100.00),
(14, 14, 'Extraction', 200.00),
(15, 15, 'Filling', 150.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`appointment_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patient_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `appointment_id` (`appointment_id`);

--
-- Indexes for table `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`treatment_id`),
  ADD KEY `appointment_id` (`appointment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `treatments`
--
ALTER TABLE `treatments`
  MODIFY `treatment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`appointment_id`);

--
-- Constraints for table `treatments`
--
ALTER TABLE `treatments`
  ADD CONSTRAINT `treatments_ibfk_1` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`appointment_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
