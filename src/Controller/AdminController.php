<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin/{adminRoutes}", name="admin_react_routing", requirements={"reactRouting"="^(?!api).+"}, defaults={"adminRoutes": null})
     */
    public function index(): Response
    {
        return $this->render('admin/base.html.twig');
    }
}