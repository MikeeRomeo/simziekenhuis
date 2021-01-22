<template>
    <div>
        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Primary survey:</h4>
                </div>
                <textarea name="symptoms" class="diagnose">
                    A: ....
                    B: ....
                    C: ....
                    D: ....
                    E: ....
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Secondary survey:</h4>
                </div>
                <textarea name="symptoms" class="diagnose">
                   ...
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MedicationTab"
}
</script>

<style lang="scss" scoped>
    .diagnose{
        height: 300px;
    }
</style>