import Vue from "vue";

import vClickOutside from "v-click-outside";
Vue.use(vClickOutside);

import GlobalButton from "global-ui/src/components/GlobalButton/GlobalButton.vue";
import GlobalBaseDialog from "global-ui/src/components/GlobalBaseDialog/GlobalBaseDialog.vue";
import GlobalCheckbox from "global-ui/src/components/GlobalCheckbox/GlobalCheckbox.vue";
import GlobalInput from "global-ui/src/components/GlobalInput/GlobalInput.vue";
import GlobalSwitch from "global-ui/src/components/GlobalSwitch/GlobalSwitch.vue";
import GlobalDropdown from "global-ui/src/components/GlobalDropdown/GlobalDropdown.vue";
import GlobalAccordion from "global-ui/src/components/GlobalAccordion/GlobalAccordion.vue";
import GlobalAnimationLoader from "global-ui/src/components/GlobalAnimationLoader/GlobalAnimationLoader.vue";

Vue.component("GlobalButton", GlobalButton);
Vue.component("GlobalBaseDialog", GlobalBaseDialog);
Vue.component("GlobalCheckbox", GlobalCheckbox);
Vue.component("GlobalInput", GlobalInput);
Vue.component("GlobalSwitch", GlobalSwitch);
Vue.component("GlobalDropdown", GlobalDropdown);
Vue.component("GlobalAccordion", GlobalAccordion);
Vue.component("GlobalAnimationLoader", GlobalAnimationLoader);
