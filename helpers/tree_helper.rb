# Needed, otherwise build fails complaining about it being undefined.
Middleman::CoreExtensions::DefaultHelpers::NEWLINE = "\n".html_safe.freeze

module TreeHelper

  def tree_for(dir)
    content_tag :ol do

      # Load the order of the directory listing from the dir.ordered file if it exists.
      if File.exists?(order_file = "#{dir}/dir.ordered")
        file = File.read(order_file)
        file.split("\n").each do |item|
          build_tree "#{dir}/#{item}"
        end

      # else we scan the directory contents
      else
        Dir.new(dir).each do |x|
          next if x == '.' || x == '..' || x == 'dir.ordered' || x.start_with?('index.') || x.start_with?('.')
          build_tree "#{dir}/#{x}"
        end
      end

    end
  end


  private

    def build_tree(file)
      if Dir.exists?(file)
        build_directory file
      else
        if resource = resource_for("#{file}.html.markdown")
          content_tag :li, :class => "nofade" do
            link_to resource.data.title, resource.url, :class => current_page?(resource.url) ? 'active' : ''
          end
        end
      end
    end

    def build_directory(file)
      resource = resource_for("#{file}/index.html.markdown")

      content_tag :li do
        content_tag :div, :class => "nofade" do
          content_tag :span do
            "expand"
          end
          concat_content link_to(resource.data.title, resource.url)
        end

        tree_for file
      end
    end

    def resource_for(file)
      path = sitemap.file_to_path(file)
      resource = sitemap.find_resource_by_path(path)
    end

    def current_page?(path)
      current_path = current_page.url
      current_path.slice! -1 if current_page.url.end_with?('/')
      current_path == path
    end

end