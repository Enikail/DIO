<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/autocomplete' => [
            [['_route' => 'app_autocomplete', '_controller' => 'App\\Controller\\AutocompleteController::autocompleteAction'], null, null, null, false, false, null],
            [['_route' => 'autocomplete', '_controller' => 'App\\Controller\\AutocompleteController::autocompleteAction'], null, null, null, false, false, null],
        ],
        '/category' => [[['_route' => 'app_category', '_controller' => 'App\\Controller\\CategoryController::index'], null, null, null, false, false, null]],
        '/category/create' => [[['_route' => 'app_category_create', '_controller' => 'App\\Controller\\CategoryController::create'], null, null, null, false, false, null]],
        '/movie' => [[['_route' => 'movies', '_controller' => 'App\\Controller\\MovieController::index'], null, null, null, false, false, null]],
        '/movie/create' => [[['_route' => 'app_movie_create', '_controller' => 'App\\Controller\\MovieController::create'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'home', '_controller' => 'App\\Controller\\ProjectController::home'], null, null, null, false, false, null]],
        '/reset-password' => [[['_route' => 'app_forgot_password_request', '_controller' => 'App\\Controller\\ResetPasswordController::request'], null, null, null, false, false, null]],
        '/reset-password/check-email' => [[['_route' => 'app_check_email', '_controller' => 'App\\Controller\\ResetPasswordController::checkEmail'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/autocomplete/([^/]++)(*:191)'
                .'|/category/(?'
                    .'|update/([^/]++)(*:227)'
                    .'|delete/([^/]++)(*:250)'
                .')'
                .'|/movie/delete/([^/]++)(*:281)'
                .'|/detail/([^/]++)(*:305)'
                .'|/reset\\-password/reset(?:/([^/]++))?(*:349)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        191 => [[['_route' => 'ux_entity_autocomplete', '_controller' => 'ux.autocomplete.entity_autocomplete_controller'], ['alias'], null, null, false, true, null]],
        227 => [[['_route' => 'app_category_update', '_controller' => 'App\\Controller\\CategoryController::update'], ['id'], null, null, false, true, null]],
        250 => [[['_route' => 'app_category_delete', '_controller' => 'App\\Controller\\CategoryController::delete'], ['id'], null, null, false, true, null]],
        281 => [[['_route' => 'app_movie_delete', '_controller' => 'App\\Controller\\MovieController::delete'], ['id'], null, null, false, true, null]],
        305 => [[['_route' => 'detail', '_controller' => 'App\\Controller\\ProjectController::details'], ['id'], null, null, false, true, null]],
        349 => [
            [['_route' => 'app_reset_password', 'token' => null, '_controller' => 'App\\Controller\\ResetPasswordController::reset'], ['token'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
