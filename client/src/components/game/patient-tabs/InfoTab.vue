<template>
    <div>
    <div class="form-row">
        <div class="image">
            <img src="@/assets/test-profielfoto.jpg" alt="">
        </div>
        <div class="description">
            <h1>Mvr. Verhaag</h1>
            <p class="room">Kamer 1</p>
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Klachten:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms">
                    - Opgenomen op vermoeden van longontsteking <br>
                    - Enkele dagen grieperig <br>
                    - verstopte neus, keelpijn, spierpijn, subfebriele temperatuur
                </textarea>
            </div>
        </div>
    </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Voorgeschiedenis:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms">
                    hypertensie, hypercholesterolaemie, diabetes mellitus type 2, COPD GOLD II.
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Allergie:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms">
                    Een mogelijke allergie voor penicilline,
                    maar dat is alweer zo lang geleden dat ze niet meer precies weet wat ze daar van kreeg.
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Medicatie:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms">
                    (handgeschreven briefje in portemonnee):
                    metoprolol ZOC 1 dd 100mg, lisinopril 1 dd 10mg, hydrochloorthiazide 1 dd 12.5mg,
                    simvastatine 1 dd 40mg, novomix '30' 40-24 EH, foradil DA 2 dd 1 pufje 12ug met voorzetkamer,
                    spiriva 1 dd 18ug.
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Last meal:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms">
                    kopje thee vanmorgen omstreeks 7.30u
                </textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-input">
                <div class="form-row form-header">
                    <h4 class="title">Overige Notities:</h4>
                    <button class="edit-button">Bewerken <i class="fas fa-pencil-alt fa-fw"></i></button>
                </div>
                <textarea name="symptoms">
                    ...
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoTab"
}
</script>

<style lang="scss" scoped>
@import '@/scss/app.scss';

    .image{
        width: 180px;
        height: 180px;
        flex-shrink: 0;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .description{
        padding-left: 16px;
        color: $red;
        font-size: 20px;
        width: 100%;
    }

    .room{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .edit-button{
        background: none;
        border: 0 solid transparent;
        font-weight: bold;
        font-size: 10px;
        margin-left: auto;
        transition: all 0.15s ease-in-out;

        &:hover, &:active{
            color: $red;
            cursor: pointer;
        }
    }



</style>