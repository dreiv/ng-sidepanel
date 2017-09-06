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

### Positioning the sidepanel
The `position` property determines whether the sidepanel appears at the `"start"` or `"end"` of the
container. By default, the 
sidepanel appears at the start of the container.
