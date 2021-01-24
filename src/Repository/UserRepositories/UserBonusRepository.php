<?php

namespace App\Repository\UserRepositories;

use App\Entity\UserEntities\UserBonus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserBonus|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserBonus|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserBonus[]    findAll()
 * @method UserBonus[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserBonusRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserBonus::class);
    }

    // /**
    //  * @return UserBonus[] Returns an array of UserBonus objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserBonus
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
