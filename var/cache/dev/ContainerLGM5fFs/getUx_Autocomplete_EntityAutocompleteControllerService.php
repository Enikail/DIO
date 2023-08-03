<?php

namespace ContainerLGM5fFs;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUx_Autocomplete_EntityAutocompleteControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'ux.autocomplete.entity_autocomplete_controller' shared service.
     *
     * @return \Symfony\UX\Autocomplete\Controller\EntityAutocompleteController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/ux-autocomplete/src/Controller/EntityAutocompleteController.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/ux-autocomplete/src/AutocompleterRegistry.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/ux-autocomplete/src/AutocompleteResultsExecutor.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/ux-autocomplete/src/Doctrine/DoctrineRegistryWrapper.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/security-core/Security.php';

        return $container->services['ux.autocomplete.entity_autocomplete_controller'] = new \Symfony\UX\Autocomplete\Controller\EntityAutocompleteController(new \Symfony\UX\Autocomplete\AutocompleterRegistry(($container->privates['.service_locator.Xbsa8iG'] ?? ($container->privates['.service_locator.Xbsa8iG'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [], [])))), new \Symfony\UX\Autocomplete\AutocompleteResultsExecutor(new \Symfony\UX\Autocomplete\Doctrine\DoctrineRegistryWrapper(($container->services['doctrine'] ?? $container->getDoctrineService())), ($container->privates['property_accessor'] ?? $container->load('getPropertyAccessorService')), new \Symfony\Component\Security\Core\Security(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'security.authorization_checker' => ['privates', 'security.authorization_checker', 'getSecurity_AuthorizationCheckerService', false],
            'security.token_storage' => ['privates', 'security.token_storage', 'getSecurity_TokenStorageService', false],
        ], [
            'security.authorization_checker' => '?',
            'security.token_storage' => '?',
        ]))), ($container->services['router'] ?? $container->getRouterService()));
    }
}