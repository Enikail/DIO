<?php

namespace App\DataFixtures;

use App\Entity\Article;
use App\Entity\Moovie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
       for($i = 1; $i <= 10; $i++){
        $moovie= new Moovie();
        $moovie -> setTitle("film $i")
                -> setImage("https://picsum.photos/200/300");
                
        
        $manager->persist($moovie);
       }

        $manager->flush();
    }
}
