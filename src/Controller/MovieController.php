<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Entity\Moovie;
use App\Repository\CategorieRepository;
use App\Repository\MovieRepository;
use App\Form\FormMovieType;
use App\Form\MovieFormType;
use App\Repository\CategoryRepository;
use App\Repository\MoovieRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\String\Slugger\SluggerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\DeleteMapping;


class MovieController extends AbstractController
{
    #[Route('/detail/{id}', name: 'detail')]
    public function details(EntityManagerInterface $manager, $id): Response
    {
        $movie = $manager->getRepository(Moovie::class)->find($id);


        return $this->render('project/detail.html.twig', [
            'movie' => $movie,
        ]);
    }

    #[Route('/movie', name: 'movies')]
    public function index(MoovieRepository $movieRepository): Response
    {
        $movies = $movieRepository->findAll();

        return $this->render('movie/index.html.twig', [
            'movies' => $movies,

        ]);
    }

    #[Route('/movie/create', name: 'app_movie_create')]
    public function create(Request $request, SluggerInterface $slugger, EntityManagerInterface $em): Response
    {
        $movie = new Moovie();
        $form = $this->createForm(MovieFormType::class, $movie);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('image')->getData();

            if ($imageFile) {
                $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $imageFile->guessExtension();

                try {
                    $imageFile->move(
                        $this->getParameter('brochures_directory'),
                        $newFilename
                    );
                } catch (\Exeption $e) {
                    // Gérer l'erreur ici
                    return $e->getMessage();

                }

                $movie->setImage($newFilename);
            }

            $em->persist($movie);
            $em->flush();

            return $this->redirectToRoute('movies');
        }

        return $this->render('movie/create_movie.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/movie/delete/{id}', name: 'app_movie_delete')]
    public function delete(EntityManagerInterface $manager, MoovieRepository $repo, $id):Response
    {
        $movie = $repo->find($id);
        $manager->remove($movie);
        $manager->flush();
        return $this->redirectToRoute('movies');
    }
   
}
