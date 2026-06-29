---

# 📘 CSS Teaching Cheatsheet

## 1. CSS Syntax

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: red;
    font-size: 40px;
}
```

---

# 2. Types of CSS

```css
Inline CSS
Internal CSS
External CSS
```

Example:

```html
<h1 style="color:red">Inline</h1>
```

```html
<style>
h1{
    color:red;
}
</style>
```

```html
<link rel="stylesheet" href="style.css">
```

---

# 3. Selectors

| Selector         | Example              |
| ---------------- | -------------------- |
| Universal        | `*`                  |
| Element          | `p`                  |
| Class            | `.box`               |
| ID               | `#header`            |
| Group            | `h1,p`               |
| Descendant       | `.parent p`          |
| Child            | `.parent > p`        |
| Adjacent Sibling | `h1 + p`             |
| General Sibling  | `h1 ~ p`             |
| Attribute        | `input[type="text"]` |

---

# 4. Colors

```css
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: rgba(255,0,0,.5);
color: hsl(0,100%,50%);
```

---

# 5. Units

Absolute

```
px
cm
mm
in
```

Relative

```
%
em
rem
vw
vh
vmin
vmax
```

---

# 6. Text Properties

```css
color
font-size
font-family
font-weight
font-style
text-align
text-decoration
text-transform
letter-spacing
word-spacing
line-height
text-shadow
text-indent
white-space
```

Example

```css
p{
    font-size:20px;
    text-align:center;
    line-height:1.6;
}
```

---

# 7. Background

```css
background-color
background-image
background-repeat
background-size
background-position
background-attachment
background
```

Example

```css
background: url(img.jpg) center/cover no-repeat;
```

---

# 8. Border

```css
border
border-width
border-style
border-color
border-radius
```

Example

```css
border:2px solid red;
border-radius:10px;
```

---

# 9. Margin

```css
margin
margin-top
margin-right
margin-bottom
margin-left
```

Shortcut

```css
margin:20px;
margin:20px 40px;
margin:10px 20px 30px;
margin:10px 20px 30px 40px;
```

---

# 10. Padding

Same as margin.

```css
padding:20px;
```

---

# 11. Box Model

```
Margin
 ↓
Border
 ↓
Padding
 ↓
Content
```

Formula

```
Total Width

=
width
+
padding
+
border
+
margin
```

---

# 12. Width & Height

```css
width
height
min-width
max-width
min-height
max-height
```

---

# 13. Display

```css
display:block;
display:inline;
display:inline-block;
display:flex;
display:grid;
display:none;
```

---

# 14. Position

```css
static
relative
absolute
fixed
sticky
```

Useful

```css
top
left
right
bottom
z-index
```

---

# 15. Overflow

```css
overflow:hidden;
overflow:auto;
overflow:scroll;
overflow:visible;
overflow-x;
overflow-y;
```

---

# 16. Float & Clear

```css
float:left;
float:right;

clear:left;
clear:right;
clear:both;
```

---

# 17. Flexbox

Container

```css
display:flex;

flex-direction
justify-content
align-items
flex-wrap
align-content
gap
```

Items

```css
flex
flex-grow
flex-shrink
flex-basis
align-self
order
```

Remember

```
Main Axis
↓

justify-content

Cross Axis
↓

align-items
```

---

# 18. Grid

Container

```css
display:grid;

grid-template-columns
grid-template-rows
gap
justify-items
align-items
place-items
```

Items

```css
grid-column
grid-row
grid-area
justify-self
align-self
```

---

# 19. List

```css
list-style
list-style-type
list-style-position
list-style-image
```

---

# 20. Table

```css
border-collapse
border-spacing
caption-side
empty-cells
```

---

# 21. Cursor

```css
pointer
grab
not-allowed
wait
crosshair
move
text
```

---

# 22. Opacity

```css
opacity:.5;
```

---

# 23. Visibility

```css
visibility:hidden;
visibility:visible;
```

Difference

```
display:none

❌ No space occupied

visibility:hidden

✅ Space occupied
```

---

# 24. Object Fit

```css
object-fit:cover;
object-fit:contain;
object-fit:fill;
object-fit:none;
```

---

# 25. Transform

```css
transform:
translate()
rotate()
scale()
skew()
```

Example

```css
transform:
translateX(100px)
rotate(45deg)
scale(1.2);
```

---

# 26. Transition

```css
transition:
property
duration
timing-function
delay
```

Shortcut

```css
transition:all .3s ease;
```

---

# 27. Animation

```css
@keyframes move{

from{}

to{}

}
```

Properties

```css
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-timing-function
```

---

# 28. Box Shadow

```css
box-shadow:
x y blur spread color;
```

Example

```css
box-shadow:
0 0 10px gray;
```

---

# 29. Text Shadow

```css
text-shadow:
2px 2px 5px gray;
```

---

# 30. Pseudo Classes

```css
:hover
:focus
:active
:visited
:first-child
:last-child
:nth-child()
:not()
:checked
:disabled
```

---

# 31. Pseudo Elements

```css
::before
::after
::first-letter
::first-line
::selection
::placeholder
```

---

# 32. CSS Variables

```css
:root{
--primary:red;
}

h1{
color:var(--primary);
}
```

---

# 33. Media Queries

```css
@media (max-width:768px){

}
```

Common Breakpoints

```
576px

768px

992px

1200px

1400px
```

---

# 34. Important Rule

```css
!important
```

Example

```css
color:red !important;
```

---

# 35. Specificity (High → Low)

```
!important

Inline

ID

Class

Element

Universal
```

---

# 36. Common CSS Functions

```css
calc()
clamp()
min()
max()
var()
rgb()
rgba()
hsl()
```

---

# 37. Frequently Used Shorthand Properties

```css
margin
padding
border
background
font
animation
transition
flex
grid
```

---

# 🎯 Recommended Teaching Order

1. CSS Introduction & Syntax
2. Types of CSS
3. Selectors
4. Colors & Units
5. Text & Fonts
6. Background
7. Border
8. Margin & Padding
9. Box Model
10. Width & Height
11. Display
12. Position
13. Overflow
14. Float (legacy layout)
15. Flexbox
16. Grid
17. Transform
18. Transition
19. Animation
20. Shadows
21. Pseudo-classes & Pseudo-elements
22. Variables
23. Media Queries
24. Specificity & `!important`

This sequence builds concepts logically—from styling basics to modern layouts and responsive design—making it easier for students to understand and for you to recall while teaching.
