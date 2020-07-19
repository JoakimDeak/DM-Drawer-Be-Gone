const target = document.body;
const config = {attributes: false, childList: true, subtree: true};

const observer = new MutationObserver(removeDMDrawer);
observer.observe(target, config);

function removeDMDrawer(){
    let matches = document.querySelectorAll('[data-testid="DMDrawer"]');
    let DMDrawer = matches[0];
    DMDrawer.parentNode.removeChild(DMDrawer);
}