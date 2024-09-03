<?php

/**
 * @generated
 * @link https://github.com/FriendsOfPHP/PHP-CS-Fixer/blob/HEAD/doc/config.rst
 */
$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude('vendor')
    ->exclude('test')
    ->exclude('tests')
    ->exclude('bin')
    ->exclude('docs')
    ->exclude('examples')
    ->exclude('templates')
    ->exclude('test_fixtures')
;

$config = new PhpCsFixer\Config();
$config->setParallelConfig(
    PhpCsFixer\Runner\Parallel\ParallelConfigFactory::detect()
);
return $config->setRules([
    '@PhpCsFixer'                                      => true,
    '@Symfony'                                         => true,
    '@DoctrineAnnotation'                              => true,
    'binary_operator_spaces'                           => [
        'operators' => [
            '=>' => null,
        ],
    ],
    'blank_line_before_statement'                      => [
        'statements' => [],
    ],
    'blank_line_after_opening_tag'                     => false,
    'cast_spaces'                                      => [
        'space' => 'none',
    ],
    'class_definition'                                 => [
        'inline_constructor_arguments' => false,
        'space_before_parenthesis'     => true,
    ],
    'concat_space'                                     => [
        'spacing' => 'one',
    ],
    'nullable_type_declaration_for_default_null_value' => false,
    'declare_parentheses'                              => true,
    'echo_tag_syntax'                                  => [
        'format'                         => 'short',
        'shorten_simple_statements_only' => true,
    ],
    'fully_qualified_strict_types'                     => true,
    'global_namespace_import'                          => true,
    'general_phpdoc_annotation_remove'                 => [
        'annotations' => [
            'author', 'package', 'subpackage', 'version',
        ],
    ],
    'increment_style'                                  => false,
    'multiline_whitespace_before_semicolons'           => [
        'strategy' => 'no_multi_line',
    ],
    'ordered_imports'                                  => [
        'imports_order'  => [
            'class', 'function', 'const',
        ],
        'sort_algorithm' => 'alpha',
    ],
    'no_superfluous_phpdoc_tags'                       => [
        'allow_mixed'         => true,
        'allow_unused_params' => true,
        'remove_inheritdoc'   => true,
    ],
    'phpdoc_align'                                     => [
        'tags' => [
            'method', 'param', 'property', 'return', 'type', 'var',
        ],
    ],
    'phpdoc_line_span'                                 => [
        'property' => 'single',
    ],
    'phpdoc_separation'                                => false,
    'phpdoc_summary'                                   => false,
    'phpdoc_to_comment'                                => false,
    'phpdoc_to_param_type'                             => [
        'scalar_types' => true,
        'union_types'  => false,
    ],
    'php_unit_internal_class'                          => false,
    'php_unit_test_class_requires_covers'              => false,
    'single_line_throw'                                => false,
    'statement_indentation'                            => [
        'stick_comment_to_next_continuous_control_statement' => false,
    ],
    'visibility_required'                              => [
        'elements' => ['method', 'property'],
    ],
    'yoda_style'                                       => false,
    'trailing_comma_in_multiline'                      => [
        'after_heredoc' => true,
    ],
])
    ->setFinder($finder)
    ->setRiskyAllowed(true)
;
