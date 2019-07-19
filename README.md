# Code-Boxes

Create easy with HTML boxes including _your_ source code. The codes depends on Bootstrap v4 and jQuery. The design is
like the material source code boxes by Google.

### Implement

````html
<div class="code-block">
    <ul class="nav nav-tabs">
        <li class="nav-item code-block-tab-active">
            <a class="nav-link code-block-link code-block-link-active" href="#" data-toggle="tab" data-tab="tab-1" role="tab">Java</a>
        </li>
        <li class="nav-item">
            <a class="nav-link code-block-link" href="#" data-toggle="tab" data-tab="tab-2" role="tab">PHP</a>
        </li>
    </ul>
    <div class="tab-content code-block-content">
        <div align="right" class="mr-3 mt-2">
            <a id="copy-code" href="#" class="material-icons code-block-option">file_copy</a>
            <a id="color-switch" href="#" class="material-icons code-block-option">highlight</a>
        </div>
        <div id="tab-1" class="tab-pane active code-block-panel" role="tabpanel">
            <div class="white-theme">
                <code class="code-block-code">
                    System.out.println("This is a test!");
                </code>
            </div>
        </div>
        <div id="tab-2" class="tab-pane code-block-panel" role="tabpanel">
            <div class="white-theme">
                <code class="code-block-code">
                    echo "This is a test!";
                </code>
            </div>
        </div>
    </div>
</div>
````
Here you can see the implementation of 2 languages (Java and PHP). Its halfed into 2 tabs which containing the code.
Just copy and paste this code and edit it for your need.<br>

Add jQuery and codeboxes.js before the **closing** html tag and the codeboxes.css in the head section.

### Features

    - You can switch between dark and light mode
    - Copy tool
    
### Demo    
You can see a [demo here](https://jsfiddle.net/smd6a4re/1/)