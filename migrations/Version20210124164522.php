<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210124164522 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_task_histories (id INT AUTO_INCREMENT NOT NULL, task_id INT NOT NULL, status_id INT NOT NULL, started_at DATETIME DEFAULT NULL, finished_at DATETIME DEFAULT NULL, INDEX IDX_DB5EDCAB8DB60186 (task_id), INDEX IDX_DB5EDCAB6BF700BD (status_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_task_histories_user (user_task_histories_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_BF2D119A1232818A (user_task_histories_id), INDEX IDX_BF2D119AA76ED395 (user_id), PRIMARY KEY(user_task_histories_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_task_histories ADD CONSTRAINT FK_DB5EDCAB8DB60186 FOREIGN KEY (task_id) REFERENCES task (id)');
        $this->addSql('ALTER TABLE user_task_histories ADD CONSTRAINT FK_DB5EDCAB6BF700BD FOREIGN KEY (status_id) REFERENCES task_status (id)');
        $this->addSql('ALTER TABLE user_task_histories_user ADD CONSTRAINT FK_BF2D119A1232818A FOREIGN KEY (user_task_histories_id) REFERENCES user_task_histories (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_task_histories_user ADD CONSTRAINT FK_BF2D119AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE task ADD initiator_id INT NOT NULL');
        $this->addSql('ALTER TABLE task ADD CONSTRAINT FK_527EDB257DB3B714 FOREIGN KEY (initiator_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_527EDB257DB3B714 ON task (initiator_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_task_histories_user DROP FOREIGN KEY FK_BF2D119A1232818A');
        $this->addSql('DROP TABLE user_task_histories');
        $this->addSql('DROP TABLE user_task_histories_user');
        $this->addSql('ALTER TABLE task DROP FOREIGN KEY FK_527EDB257DB3B714');
        $this->addSql('DROP INDEX IDX_527EDB257DB3B714 ON task');
        $this->addSql('ALTER TABLE task DROP initiator_id');
    }
}
