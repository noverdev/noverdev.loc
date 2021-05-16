<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210506085002 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_task_histories DROP FOREIGN KEY FK_DB5EDCAB8DB60186');
        $this->addSql('ALTER TABLE user_task_histories DROP FOREIGN KEY FK_DB5EDCAB6BF700BD');
        $this->addSql('ALTER TABLE task DROP FOREIGN KEY FK_527EDB257DB3B714');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B1580A76ED395');
        $this->addSql('ALTER TABLE user_task_histories_user DROP FOREIGN KEY FK_BF2D119AA76ED395');
        $this->addSql('ALTER TABLE user_details_user_bonus DROP FOREIGN KEY FK_C065698989D9B266');
        $this->addSql('ALTER TABLE user_details_user_bonus DROP FOREIGN KEY FK_C06569891C7DC1CE');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B15801ED93D47');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B15805FB14BA7');
        $this->addSql('ALTER TABLE user_details DROP FOREIGN KEY FK_2A2B15806BF700BD');
        $this->addSql('ALTER TABLE user_task_histories_user DROP FOREIGN KEY FK_BF2D119A1232818A');
        $this->addSql('CREATE TABLE routes (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, component_name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE test_cdur (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE task');
        $this->addSql('DROP TABLE task_status');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_bonus');
        $this->addSql('DROP TABLE user_details');
        $this->addSql('DROP TABLE user_details_user_bonus');
        $this->addSql('DROP TABLE user_group');
        $this->addSql('DROP TABLE user_level');
        $this->addSql('DROP TABLE user_status');
        $this->addSql('DROP TABLE user_task_histories');
        $this->addSql('DROP TABLE user_task_histories_user');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE task (id INT AUTO_INCREMENT NOT NULL, initiator_id INT NOT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, deleted_at DATETIME DEFAULT NULL, INDEX IDX_527EDB257DB3B714 (initiator_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE task_status (id INT AUTO_INCREMENT NOT NULL, alias VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_bonus (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, rate DOUBLE PRECISION NOT NULL, type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_details (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, status_id INT NOT NULL, user_group_id INT NOT NULL, level_id INT NOT NULL, user_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, first_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, last_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, salary DOUBLE PRECISION NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_2A2B15801ED93D47 (user_group_id), INDEX IDX_2A2B15805FB14BA7 (level_id), INDEX IDX_2A2B15806BF700BD (status_id), UNIQUE INDEX UNIQ_2A2B1580A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_details_user_bonus (user_details_id INT NOT NULL, user_bonus_id INT NOT NULL, INDEX IDX_C06569891C7DC1CE (user_details_id), INDEX IDX_C065698989D9B266 (user_bonus_id), PRIMARY KEY(user_details_id, user_bonus_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_group (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_level (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, level INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_status (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, alias VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_task_histories (id INT AUTO_INCREMENT NOT NULL, task_id INT NOT NULL, status_id INT NOT NULL, started_at DATETIME DEFAULT NULL, finished_at DATETIME DEFAULT NULL, INDEX IDX_DB5EDCAB6BF700BD (status_id), INDEX IDX_DB5EDCAB8DB60186 (task_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_task_histories_user (user_task_histories_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_BF2D119A1232818A (user_task_histories_id), INDEX IDX_BF2D119AA76ED395 (user_id), PRIMARY KEY(user_task_histories_id, user_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE task ADD CONSTRAINT FK_527EDB257DB3B714 FOREIGN KEY (initiator_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B15801ED93D47 FOREIGN KEY (user_group_id) REFERENCES user_group (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B15805FB14BA7 FOREIGN KEY (level_id) REFERENCES user_level (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B15806BF700BD FOREIGN KEY (status_id) REFERENCES user_status (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_details ADD CONSTRAINT FK_2A2B1580A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_details_user_bonus ADD CONSTRAINT FK_C06569891C7DC1CE FOREIGN KEY (user_details_id) REFERENCES user_details (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_details_user_bonus ADD CONSTRAINT FK_C065698989D9B266 FOREIGN KEY (user_bonus_id) REFERENCES user_bonus (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_task_histories ADD CONSTRAINT FK_DB5EDCAB6BF700BD FOREIGN KEY (status_id) REFERENCES task_status (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_task_histories ADD CONSTRAINT FK_DB5EDCAB8DB60186 FOREIGN KEY (task_id) REFERENCES task (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_task_histories_user ADD CONSTRAINT FK_BF2D119A1232818A FOREIGN KEY (user_task_histories_id) REFERENCES user_task_histories (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_task_histories_user ADD CONSTRAINT FK_BF2D119AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('DROP TABLE routes');
        $this->addSql('DROP TABLE test_cdur');
    }
}
