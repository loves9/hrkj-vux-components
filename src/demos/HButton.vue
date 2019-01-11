<template>
    <div>
        <h-button></h-button>
    </div>
</template>

<script>
import { HButton } from "vux";

export default {
    components: {
        HButton
    },
    data() {
        return {
            iconFontClass: {
                iconClass: "ic-daiban-l",
                fontSize: "48px",
                color: "#47B3E1"
            }
        };
    },
    methods: {
        itemClick(){
            alert('doc-cell')
        }
    }
};
</script>

<style scoped>
</style>
