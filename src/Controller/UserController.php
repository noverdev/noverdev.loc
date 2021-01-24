<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="user.index")
     */
    public function index(): Response
    {
        $users = [1, 2, 3, 4, 5, 6, 67];

        return new JsonResponse([
            'users' => $users
        ]);
    }
}
