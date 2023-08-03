<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* project/index.html.twig */
class __TwigTemplate_00d599b8baecfe3544bd5304b481e422 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "project/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Hello ProjectController!";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>



<div class=\"container\">
    <div class=\"row mt-5\">
        <div class=\"col-md-6 mx-auto\">
            <div class=\"card\">
                <div class=\"card-header\">
                    <h4 class=\"text-center\">Inscription</h4>
                </div>
                <div class=\"card-body\">
                    <form>
                        <div class=\"form-group\">
                            <label for=\"nom\">Nom</label>
                            <input type=\"text\" name=\"nom\" id=\"nom\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"prenom\">Prénom</label>
                            <input type=\"text\" name=\"prenom\" id=\"prenom\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"email\">Adresse email</label>
                            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"password\">Mot de passe</label>
                            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"password_confirmation\">Confirmation du mot de passe</label>
                            <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\"
                                   class=\"form-control\" required>
                        </div>
                        <button type=\"submit\" class=\"btn btn-primary btn-block\">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
   
</section>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "project/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello ProjectController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>



<div class=\"container\">
    <div class=\"row mt-5\">
        <div class=\"col-md-6 mx-auto\">
            <div class=\"card\">
                <div class=\"card-header\">
                    <h4 class=\"text-center\">Inscription</h4>
                </div>
                <div class=\"card-body\">
                    <form>
                        <div class=\"form-group\">
                            <label for=\"nom\">Nom</label>
                            <input type=\"text\" name=\"nom\" id=\"nom\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"prenom\">Prénom</label>
                            <input type=\"text\" name=\"prenom\" id=\"prenom\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"email\">Adresse email</label>
                            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"password\">Mot de passe</label>
                            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" required>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"password_confirmation\">Confirmation du mot de passe</label>
                            <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\"
                                   class=\"form-control\" required>
                        </div>
                        <button type=\"submit\" class=\"btn btn-primary btn-block\">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
   
</section>
{% endblock %}
", "project/index.html.twig", "/home/mohamed/Downloads/project/templates/project/index.html.twig");
    }
}
