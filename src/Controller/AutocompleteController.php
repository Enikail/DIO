<?php

namespace App\Controller;

use App\Entity\Moovie;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Messenger\Transport\Serialization\SerializerInterface;

class AutocompleteController extends AbstractController
{
    #[Route('/autocomplete', name: 'app_autocomplete')]
    public function autocompleteAction(Request $request, EntityManagerInterface $em, SerializerInterface $serializer)
    {
        $searchTerm = $request->query->get('q');


        $movies = $em->getRepository(Moovie::class)
            ->createQueryBuilder('m')
            ->where('m.title LIKE :searchTerm')
            ->setParameter('searchTerm', '%' . $searchTerm . '%')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();


        $data = [];
        foreach ($movies as $movie) {
            $data[] = [
                'id' => $movie->getId(),
                'text' => $movie->getTitle(),
                'image' => '/brochures/' . $movie->getImage(),
            ];
        }
        return new JsonResponse($data);
    }
}
