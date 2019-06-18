###
# Page options, layouts, aliases and proxies
###
I18n.default_locale = :pl

# Asset Settings
set :css_dir, 'assets/css'
set :fonts_dir, 'assets/fonts'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :build_dir, '../../web/cdn.lh'

# Per-page layout changes:
# With no layout
page '/*.txt', layout: false

configure :development do
  #compass_config do |config|
  #  config.sass_options = {:debug_info => true}
  #end
  activate :livereload
end

activate :blog do |blog|
  blog.name = "library"
  blog.prefix = "library"
  blog.permalink = "{title}.html"
  # Matcher for blog source files
  # blog.sources = "{year}-{month}-{day}-{title}.html"
  blog.sources = "{title}.html"
  blog.paginate = false
  #blog.per_page = 6
  #blog.page_link = "page/:num"
  #blog.layout = "library"
end