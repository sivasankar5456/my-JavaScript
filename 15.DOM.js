//DOM: document object model

/* in html before are after tag there is always default text 
normal node
tag is element it is element or element node

text is text node it is text itself
attribute is attribute node


section 1: selection of tags
1)getElementById()  return single element of id
2) getElementsByClassName() return multiple elements of class
3) getElementsByTagName        return multiple elements of tag
4)getElementByName()            return multiple elements of name
5)querySelector()
queryselctor("#id")=getElementsbyId()   return single elements
queryselctor(".class")=getElementsByClass()  return single elements
queryselctor("tag")=getElementsbByTagName()  return single elements


6)querySelectorAll()
queryselctorAll(".class")=getElementsByClass()   return multiple elements
queryselctorAll("tag")=getElementsbByTagName()   return multiple elements



// section 2
1) parent 

parentElement--> get the parent tag (element)
parentNode--> get the parent tag (node)

//2)child

childElementCount  -- property to get the number of child tags
childNodes  --> property to get all the child nodes present in one node
children --> property to get the only tge child elements (tag)
firstChild --> it will consider all type nodes and gievn first child  // it will give first child it is text which is default
firstElementChild --> it will consider only elements nodes and gievn first child (tag)
hashChildNodes  --> it is a method which return a boolean if child is present or not


3)siblings

nextSbling --->consider all nodes and gives next sibling
---> consider only element nodes and gives next siblings
---> consider all nodes and gives previous siblings
---> consider only element nodes and gives next siblings

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

DOM : document object model 


SECTION 1:-


1) getElementById()                    return single element of id
2) getElementsByClassName()            return multiple elements of class
3) getElementsByTagName()              return multiple elements of tag
4) getElementsByName()                 return multiple elements of name
5) querySelector()
    querySelector("#id") == getElementById()              return single element
    querySelector(".cls") == getElementByClassName()      return single element
    querySelector("tag") == getElementByTagName()         return single element

6) querySelectorAll()

     querySelectorAll(".cls") == getElementsByClassName()    return multiple elements
     querySelector("tag") == getElementsByTagName()          return multiple elements
 
     

SECTION 2 : TRAVERSING THE TAGS  :-

1) parent
          parentElement --> get the parent tag (element)
          parentNode    --> get the parent tag (node)

2) child
         1. childElementCount --> property to get the number of child tags.
         2. childNodes        --> property to get all the child nodes present in one parent.
         3. children          --> property to get only the child elements or tags.
         4. firstChild        --> it will consider all the type of nodes and given first child
         5. firstElementChild --> it will consider only element node and give the first child or tag
         6. laststChild       --> it will consider all the type of nodes and given last child
         7. lastElementChild  --> it will consider only element node and give the last child or tag

         8. hasChildNodes     -->  it is a method which return a boolean if child present or not.


3) sibling  :-
            previousSibling         --> consider all nodes and gives previous sibling
            previousElementSibling  --> consider only element nodes and gives previous sibling
            nextSibling             --> consider all nodes and gives next sibling
            nextElementSibling      --> consider only element nodes and gives next sibling


section - 3 manupulation
1) createElement("tag name") -->create a new tags as specified
2)textContent               -->get  or set a text node inside the tag
3)innertext                 -->get or set a text node inside the tag
4)value                     -->get or set a value inside the input tag
5)append(child node)        -->insert any child node inside the parent to the last position
6)prepend(child node)       -->insert any child node inside the parent to the first position
7)appendChild()            -->insert only element node inside the parent to the last position
8)insertBefore()           -->insert only element node inside the parent to the specified position
9)replaceChild()
10)removeChild()


section-4:  manipulation of attributes

1)hasAttribute()
2)getAttribute()
3)setAttribute()

*/


















