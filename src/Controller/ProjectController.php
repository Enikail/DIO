<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Moovie;
use App\Repository\MoovieRepository;
use Doctrine\ORM\EntityManagerInterface;

class ProjectController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(MoovieRepository $moovieRepository): Response
    {
        $moovies = $moovieRepository->findAll();

        return $this->render('project/home.html.twig', [
            'moovies' => $moovies,
        ]);
    }

    #[Route('/detail/{id}', name: 'detail')]
    public function details(EntityManagerInterface $manager, $id): Response
    {
        $movie = $manager->getRepository(Moovie::class)->find($id);


        return $this->render('project/detail.html.twig', [
            'movie' => $movie,
        ]);
    }
}
