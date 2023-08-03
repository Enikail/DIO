<?php

namespace ContainerSeom1i8;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUx_Autocomplete_ChoiceTypeExtensionService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'ux.autocomplete.choice_type_extension' shared service.
     *
     * @return \Symfony\UX\Autocomplete\Form\AutocompleteChoiceTypeExtension
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/form/FormTypeExtensionInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/form/AbstractTypeExtension.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/ux-autocomplete/src/Form/AutocompleteChoiceTypeExtension.php';

        return $container->privates['ux.autocomplete.choice_type_extension'] = new \Symfony\UX\Autocomplete\Form\AutocompleteChoiceTypeExtension(($container->services['translator'] ?? $container->getTranslatorService()));
    }
}
