<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210124145048 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE task_status (id INT AUTO_INCREMENT NOT NULL, alias VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_bonus (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, rate DOUBLE PRECISION NOT NULL, type VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_details (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, status_id INT NOT NULL, user_group_id INT NOT NULL, level_id INT NOT NULL, user_name VARCHAR(255) DEFAULT NULL, first_name VARCHAR(255) DEFAULT NULL, last_name VARCHAR(255) DEFAULT NULL, salary DOUBLE PRECISION NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_2A2B1580A76ED395 (user_id), INDEX IDX_2A2B15806BF700BD (status_id), INDEX IDX_2A2B15801ED93D47 (user_group_id), INDEX IDX_2A2B15805FB14BA7 (level_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_group (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_level (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, level INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_status (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, alias VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B1580A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B15806BF700BD FOREIGN KEY (status_id) REFERENCES user_status (id)');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B15801ED93D47 FOREIGN KEY (user_group_id) REFERENCES user_group (id)');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B15805FB14BA7 FOREIGN KEY (level_id) REFERENCES user_level (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B1580A76ED395');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B15801ED93D47');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B15805FB14BA7');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B15806BF700BD');
        $this->addSql('DROP TABLE task_status');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_bonus');
        $this->addSql('DROP TABLE user_details');
        $this->addSql('DROP TABLE user_group');
        $this->addSql('DROP TABLE user_level');
        $this->addSql('DROP TABLE user_status');
    }
}
