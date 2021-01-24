<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210124150012 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_details_user_bonus (user_details_id INT NOT NULL, user_bonus_id INT NOT NULL, INDEX IDX_C06569891C7DC1CE (user_details_id), INDEX IDX_C065698989D9B266 (user_bonus_id), PRIMARY KEY(user_details_id, user_bonus_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_details_user_bonus ADD CONSTRAINT FK_C06569891C7DC1CE FOREIGN KEY (user_details_id) REFERENCES user_details (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_details_user_bonus ADD CONSTRAINT FK_C065698989D9B266 FOREIGN KEY (user_bonus_id) REFERENCES user_bonus (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user_details_user_bonus');
    }
}
