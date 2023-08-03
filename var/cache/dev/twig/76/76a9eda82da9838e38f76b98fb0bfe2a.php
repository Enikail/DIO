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

/* category/index.html.twig */
class __TwigTemplate_9c934e42458c15c42c00c825ef8e3341 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "category/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "category/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "category/index.html.twig", 1);
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

        echo "Hello CategoryController!";
        
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
        echo "<div class=\"main-gr\">
<div class=\"container\">
<div class=\"cat-content\">
<div class=\"col-sm-6\">
\t\t\t\t\t\t<h2>Manage <b>des catégories </b></h2>
            <div class=\"d-flex justify-content-between align-items-center mb-3\">
            <a class=\"btn btn-primary\" href=\"";
        // line 12
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_category_create");
        echo "\"><i class=\"bi bi-plus-circle\"></i> Ajouter</a>
          </div>
\t\t\t\t\t</div>
<div class=\"card mb-3\">
  <div class=\"card-body\">
    <ul class=\"list-group\">
      ";
        // line 18
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 18, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["cat"]) {
            // line 19
            echo "        <li class=\"cat-list list-group-item d-flex justify-content-between align-items-center\">
          <span>";
            // line 20
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["cat"], "title", [], "any", false, false, false, 20), "html", null, true);
            echo "</span>
          <div>
            <a class=\"btn btn-outline-primary\" href=\"";
            // line 22
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_category_update", ["id" => twig_get_attribute($this->env, $this->source, $context["cat"], "id", [], "any", false, false, false, 22)]), "html", null, true);
            echo "\"><i class=\"bi bi-pencil-square\"></i></a>
            <form action=\"";
            // line 23
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_category_delete", ["id" => twig_get_attribute($this->env, $this->source, $context["cat"], "id", [], "any", false, false, false, 23)]), "html", null, true);
            echo "\" method=\"post\" class=\"d-inline\">
              <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
              <button type=\"submit\" class=\"btn btn-outline-danger\"><i class=\"bi bi-trash\"></i></button>
            </form>
          </div>
        </li>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cat'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "    </ul>
  </div>
</div>

<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">
  <div class=\"modal-dialog\" role=\"document\">
    <div class=\"modal-content\">
      <div class=\"modal-header\">
        <h5 class=\"modal-title\" id=\"editModalLabel\">Modifier la catégorie</h5>
        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
          <span aria-hidden=\"true\">&times;</span>
        </button>
      </div>
      <div class=\"modal-body\">
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>


";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "category/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  134 => 30,  121 => 23,  117 => 22,  112 => 20,  109 => 19,  105 => 18,  96 => 12,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello CategoryController!{% endblock %}

{% block body %}
<div class=\"main-gr\">
<div class=\"container\">
<div class=\"cat-content\">
<div class=\"col-sm-6\">
\t\t\t\t\t\t<h2>Manage <b>des catégories </b></h2>
            <div class=\"d-flex justify-content-between align-items-center mb-3\">
            <a class=\"btn btn-primary\" href=\"{{path('app_category_create')}}\"><i class=\"bi bi-plus-circle\"></i> Ajouter</a>
          </div>
\t\t\t\t\t</div>
<div class=\"card mb-3\">
  <div class=\"card-body\">
    <ul class=\"list-group\">
      {% for cat in categories %}
        <li class=\"cat-list list-group-item d-flex justify-content-between align-items-center\">
          <span>{{ cat.title }}</span>
          <div>
            <a class=\"btn btn-outline-primary\" href=\"{{ path('app_category_update', {'id':cat.id}) }}\"><i class=\"bi bi-pencil-square\"></i></a>
            <form action=\"{{ path('app_category_delete', {'id':cat.id}) }}\" method=\"post\" class=\"d-inline\">
              <input type=\"hidden\" name=\"_method\" value=\"DELETE\">
              <button type=\"submit\" class=\"btn btn-outline-danger\"><i class=\"bi bi-trash\"></i></button>
            </form>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">
  <div class=\"modal-dialog\" role=\"document\">
    <div class=\"modal-content\">
      <div class=\"modal-header\">
        <h5 class=\"modal-title\" id=\"editModalLabel\">Modifier la catégorie</h5>
        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
          <span aria-hidden=\"true\">&times;</span>
        </button>
      </div>
      <div class=\"modal-body\">
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>


{% endblock %}", "category/index.html.twig", "/home/mohamed/Downloads/project_siaci/templates/category/index.html.twig");
    }
}
