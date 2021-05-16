<?php

namespace App\Repository;

use App\Entity\SiteRoute;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SiteRoute|null find($id, $lockMode = null, $lockVersion = null)
 * @method SiteRoute|null findOneBy(array $criteria, array $orderBy = null)
 * @method SiteRoute[]    findAll()
 * @method SiteRoute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SiteRouteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SiteRoute::class);
    }

    // /**
    //  * @return SiteRoute[] Returns an array of SiteRoute objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SiteRoute
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
