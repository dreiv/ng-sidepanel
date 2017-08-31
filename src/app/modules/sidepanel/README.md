# SidePanel

The `<app-sidepanel>` component is a panel that can be placed on the side of some primary content.
It can contain any content. 

The sidepanel and its associated content live inside of an `<app-sidepanel-container>` component:

```html
<app-sidepanel-container>
  <app-sidepanel>
    <!-- sidepanel content -->
  </app-sidepanel>

  <!-- primary content -->
</app-sidepanel-container>
```

A sidepanel container may contain one or two `<app-sidepanel>` elements. When there are two 
`<app-sidepanel>` elements, each must be placed on a different side of the container.
See the section on positioning below.

### Sidepanel mode
The sidepanel can render in one of three different ways based on the `mode` property.

| Mode | Description                                                                               |
|------|-------------------------------------------------------------------------------------------|
| over | Sidepanel floats _over_ the primary content, which is covered by a backdrop               |
| push | Sidepanel _pushes_ the primary content out of its way, also covering it with a backdrop   |
| side | Sidepanel appears _side-by-side_ with the primary content                                 |

### Positioning the sidepanel
The `position` property determines whether the sidepanel appears at the `"start"` or `"end"` of the
container. This is affected by the current text direction ("ltr" or "rtl"). By default, the 
sidepanel appears at the start of the container.

### Sizing the sidepanel
The `<app-sidepanel>` will, by default, fit the size of its content. The width can be explicitly set
via CSS:

```css
app-sidepanel {
  width: 200px;
}
```

For a fullscreen sidepanel, the recommended approach is set up the DOM such that the
`<app-sidepanel-container>` can naturally take up the full space:
