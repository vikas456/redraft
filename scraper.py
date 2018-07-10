from urllib2 import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://en.wikipedia.org/wiki/2016_NFL_Draft'
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()
page_soup = soup(page_html, "html.parser")

tableArr = page_soup.findAll("table")
table = tableArr[4]
rows = table.tbody.findAll("tr")
print "[",
for row in rows[1:]:
    try:
        seg = row.findAll("td")
        name = seg[2].span.span.span.a["title"]
        if name.find('(') != -1:
            loc = name.index("(")
            name = name[:loc]
        print "\'" + name.strip() + "\'" + ",",
    except:
        try:
            name = seg[4].span.span.span.a["title"]
            if name.find('(') != -1:
                loc = name.index("(")
                name = name[:loc]
            
            print "\'" + name.strip() + "\'" + ",",
        except:
            continue
print("]")
 