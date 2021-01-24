<?php

namespace App\Repository;

use App\Entity\UserTaskHistories;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserTaskHistories|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserTaskHistories|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserTaskHistories[]    findAll()
 * @method UserTaskHistories[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserTaskHistoriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserTaskHistories::class);
    }

    // /**
    //  * @return UserTaskHistories[] Returns an array of UserTaskHistories objects
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
    public function findOneBySomeField($value): ?UserTaskHistories
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
