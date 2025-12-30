

import json
from bs4 import BeautifulSoup

def extract_road_signs(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    signs_data = []
    
    galleries = soup.find_all('ul', class_='gallery')
    print(f"Found {len(galleries)} galleries.")

    all_gallery_items = soup.find_all('li', class_='gallerybox')
    print(f"Found {len(all_gallery_items)} total gallerybox items.")

    processed_items = 0

    # Find all category headings (h2 and h3)
    headings = soup.find_all(['h2', 'h3'])

    current_category = ""
    current_subcategory = ""

    for heading in headings:
        # Skip headings from the table of contents
        if heading.find_parent(id="toc"):
            continue

        text = heading.get_text(strip=True).replace('[edit]', '')
        if heading.name == 'h2':
            current_category = text
            current_subcategory = "" # Reset subcategory
        elif heading.name == 'h3':
            current_subcategory = text

        # Find the next gallery after the heading
        gallery = heading.find_next('ul', class_='gallery')
        if not gallery:
            continue
            
        # Check if the gallery belongs to the current heading
        prev_heading_of_gallery = gallery.find_previous(['h2', 'h3'])
        if prev_heading_of_gallery != heading:
            continue

        print(f"\nProcessing category: {current_category} - {current_subcategory}")

        for item in gallery.find_all('li', class_='gallerybox'):
            processed_items += 1
            name_tag = item.find('div', class_='gallerytext')
            if not name_tag:
                print(f"Skipping a gallerybox because it has no gallerytext. Item: {item}")
                continue
            name = name_tag.get_text(strip=True)
            print(f"  - Found sign: {name}")

            img_tag = item.find('img')
            image_url = ""
            if img_tag and 'src' in img_tag.attrs:
                image_url = 'https:' + img_tag['src']
            
            if img_tag and 'srcset' in img_tag.attrs:
                srcset_parts = img_tag['srcset'].split(',')
                if srcset_parts:
                    last_part = srcset_parts[-1].strip()
                    url = last_part.split(' ')[0]
                    if url:
                        image_url = 'https:' + url

            category_name = f"{current_category} - {current_subcategory}" if current_subcategory else current_category

            signs_data.append({
                'category': category_name,
                'name': name,
                'description': name,
                'imageUrl': image_url
            })

    print(f"\nTotal processed items: {processed_items}")
    print(f"Total extracted signs: {len(signs_data)}")
    return signs_data

def main():
    with open('lib/index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()

    road_signs = extract_road_signs(html_content)

    # I will output to a typescript file as requested previously
    with open('lib/road-signs-data.ts', 'w', encoding='utf-8') as f:
        f.write("export const roadSigns = ")
        json.dump(road_signs, f, ensure_ascii=False, indent=2)
        f.write(";")


if __name__ == '__main__':
    main()

