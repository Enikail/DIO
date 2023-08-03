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

/* security/login.html.twig */
class __TwigTemplate_0c770c418292a3e1b63bbe76182f29e7 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'menu' => [$this, 'block_menu'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "security/login.html.twig", 1);
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

        echo "Log in!";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 4
    public function block_menu($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 6
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 7
        echo "<div class=\"main\">
<div class=\"container\">
<form method=\"post\">
    ";
        // line 10
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 10, $this->source); })())) {
            // line 11
            echo "        <div class=\"alert alert-danger\">";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 11, $this->source); })()), "messageKey", [], "any", false, false, false, 11), twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 11, $this->source); })()), "messageData", [], "any", false, false, false, 11), "security"), "html", null, true);
            echo "</div>
    ";
        }
        // line 13
        echo "
    ";
        // line 14
        if (twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 14, $this->source); })()), "user", [], "any", false, false, false, 14)) {
            // line 15
            echo "        <div class=\"mb-3 login-info\" >
            You are logged in as ";
            // line 16
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 16, $this->source); })()), "user", [], "any", false, false, false, 16), "userIdentifier", [], "any", false, false, false, 16), "html", null, true);
            echo ", <a href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            echo "\">Logout</a>
        </div>
    ";
        }
        // line 19
        echo "
<section class=\"background-radial-gradient overflow-hidden\">

  <div class=\"container px-4 py-5 px-md-5 text-center text-lg-start my-5\">
    <div class=\"row gx-lg-5 align-items-center mb-5\">
      <div class=\"col-lg-6 mb-5 mb-lg-0\" style=\"z-index: 10\">
        <h1 class=\"my-5 display-5 fw-bold ls-tight\" style=\"color: hsl(218, 81%, 95%)\">
          DIOT SIACI<br />
          <span style=\"color: hsl(218, 81%, 75%)\">vidéothèque</span>
        </h1>
       
      </div>

      <div class=\"col-lg-6 mb-5 mb-lg-0 position-relative\">
        <div id=\"radius-shape-1\" class=\"position-absolute rounded-circle shadow-5-strong\"></div>
        <div id=\"radius-shape-2\" class=\"position-absolute shadow-5-strong\"></div>

        <div class=\"card bg-glass\">
          <div class=\"card-body px-4 py-5 px-md-5\">
            <form>
             <div class=\"form-outline mb-4\">
                <div class=\"input-group\">
                  <span class=\"input-group-text\">
                    <i class=\"bi bi-person-circle\"></i>
                  </span>
                </div>
              </div>

                <div class=\"form-outline mb-4\">
               
                <input type=\"email\" value=\"";
        // line 49
        echo twig_escape_filter($this->env, (isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 49, $this->source); })()), "html", null, true);
        echo "\" name=\"email\" id=\"form3Example3\" class=\"form-control\" autocomplete=\"email\" required autofocus>
                <label class=\"form-label\" for=\"form3Example3\">Email address</label>
              </div>

              <div class=\"form-outline mb-4\">
                 <input type=\"password\" name=\"password\" id=\"form3Example4\" class=\"form-control\" autocomplete=\"current-password\" required>
                <label class=\"form-label\" for=\"form3Example4\">Password</label>
              </div>

            
              <input type=\"hidden\" name=\"_csrf_token\"
           value=\"";
        // line 60
        echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("authenticate"), "html", null, true);
        echo "\"
            >
                 <div class=\"form-check d-flex justify-content-center mb-4\">
                <label>
                    <input type=\"checkbox\" name=\"_remember_me\"> Remember me
                </label>
            </div>
              <button type=\"submit\" class=\"btn btn-primary btn-block mb-4\">
                Sign up
              </button>
              <div class=\"text-center\">
                <p>or sign up with:</p>
                <button type=\"button\" class=\"btn btn-link btn-floating mx-1\">
                  <i class=\"bi bi-facebook\"></i>
                </button>

                <button type=\"button\" class=\"btn btn-link btn-floating mx-1\">
                  <i class=\"bi bi-instagram\"></i>
                </button>

                <button type=\"button\" class=\"btn btn-link btn-floating mx-1\">
                  <i class=\"bi bi-twitter\"></i>
                </button>
              </div>
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
        return "security/login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  182 => 60,  168 => 49,  136 => 19,  128 => 16,  125 => 15,  123 => 14,  120 => 13,  114 => 11,  112 => 10,  107 => 7,  97 => 6,  79 => 4,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Log in!{% endblock %}
{% block menu %}{% endblock %}

{% block body %}
<div class=\"main\">
<div class=\"container\">
<form method=\"post\">
    {% if error %}
        <div class=\"alert alert-danger\">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
    {% endif %}

    {% if app.user %}
        <div class=\"mb-3 login-info\" >
            You are logged in as {{ app.user.userIdentifier }}, <a href=\"{{ path('app_logout') }}\">Logout</a>
        </div>
    {% endif %}

<section class=\"background-radial-gradient overflow-hidden\">

  <div class=\"container px-4 py-5 px-md-5 text-center text-lg-start my-5\">
    <div class=\"row gx-lg-5 align-items-center mb-5\">
      <div class=\"col-lg-6 mb-5 mb-lg-0\" style=\"z-index: 10\">
        <h1 class=\"my-5 display-5 fw-bold ls-tight\" style=\"color: hsl(218, 81%, 95%)\">
          DIOT SIACI<br />
          <span style=\"color: hsl(218, 81%, 75%)\">vidéothèque</span>
        </h1>
       
      </div>

      <div class=\"col-lg-6 mb-5 mb-lg-0 position-relative\">
        <div id=\"radius-shape-1\" class=\"position-absolute rounded-circle shadow-5-strong\"></div>
        <div id=\"radius-shape-2\" class=\"position-absolute shadow-5-strong\"></div>

        <div class=\"card bg-glass\">
          <div class=\"card-body px-4 py-5 px-md-5\">
            <form>
             <div class=\"form-outline mb-4\">
                <div class=\"input-group\">
                  <span class=\"input-group-text\">
                    <i class=\"bi bi-person-circle\"></i>
                  </span>
                </div>
              </div>

                <div class=\"form-outline mb-4\">
               
                <input type=\"email\" value=\"{{ last_username }}\" name=\"email\" id=\"form3Example3\" class=\"form-control\" autocomplete=\"email\" required autofocus>
                <label class=\"form-label\" for=\"form3Example3\">Email address</label>
              </div>

              <div class=\"form-outline mb-4\">
                 <input type=\"password\" name=\"password\" id=\"form3Example4\" class=\"form-control\" autocomplete=\"current-password\" required>
                <label class=\"form-label\" for=\"form3Example4\">Password</label>
              </div>

            
              <input type=\"hidden\" name=\"_csrf_token\"
           value=\"{{ csrf_token('authenticate') }}\"
            >
                 <div class=\"form-check d-flex justify-content-center mb-4\">
                <label>
                    <input type=\"checkbox\" name=\"_remember_me\"> Remember me
                </label>
            </div>
              <button type=\"submit\" class=\"btn btn-primary btn-block mb-4\">
                Sign up
              </button>
              <div class=\"text-center\">
                <p>or sign up with:</p>
                <button type=\"button\" class=\"btn btn-link btn-floating mx-1\">
                  <i class=\"bi bi-facebook\"></i>
                </button>

                <button type=\"button\" class=\"btn btn-link btn-floating mx-1\">
                  <i class=\"bi bi-instagram\"></i>
                </button>

                <button type=\"button\" class=\"btn btn-link btn-floating mx-1\">
                  <i class=\"bi bi-twitter\"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{% endblock %}

", "security/login.html.twig", "/home/mohamed/Downloads/project_siaci/templates/security/login.html.twig");
    }
}
