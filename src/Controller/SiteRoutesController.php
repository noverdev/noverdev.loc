<?php

namespace App\Controller;

use App\Entity\SiteRoute;
use App\Repository\SiteRouteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\VarDumper\VarDumper;

/**
 * @Route("/api/routes")
 */
class SiteRoutesController extends AbstractController
{
    /**
     * @Route("/", name="allRoutes")
     */
    public function index(SiteRouteRepository $siteRouteRepository): Response
    {
        return $this->json($siteRouteRepository->findAll());
    }

    /**
     * @Route("/new", name="newRoute")
     */
    public function new(): JsonResponse
    {
        $siteRoute = new SiteRoute();

        $siteRoute->setName('test');
        $siteRoute->setComponentName('componentTest');

        $em = $this->getDoctrine()->getManager();
        $em->persist($siteRoute);
        $em->flush();

        return $this->json(['status' => true]);
    }
}
