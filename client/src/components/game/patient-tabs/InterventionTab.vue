<template>
    <div>
        <intervention-list :tag="'a'" :name="'Airway'">
            <div class="intervention-list-item">
                <p class="description">
                    Nekkraag
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Nekkraag')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Endotracheale tube
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Endotracheale tube')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Oropharyngeale luchtweg
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Oropharyngeale luchtweg')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Nasopharyngeale luchtweg
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Nasopharyngeale luchtweg')">
                    Toepassen
                </button>
            </div>
        </intervention-list>

        <intervention-list :tag="'b'" :name="'Breathing'">
            <div class="intervention-list-item">
                <p class="description">
                    Non rebreathing masker
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Non rebreathing masker')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Neusbril
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Neusbril')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Masker ballon beademing
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Masker ballon beademing')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Vernevelen met epinefrine (adreneline)
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Vernevelen met epinefrine (adreneline)')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Vernevelen met NaCI 0.9%
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Vernevelen met NaCI 0.9%')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Vernevelen met Salbutamol/Ipratroplium
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Vernevelen met Salbutamol/Ipratroplium')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Arterial bloedgas spuit
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Arterial bloedgas spuit')">
                    Toepassen
                </button>
            </div>

        </intervention-list>

        <intervention-list :tag="'C'" :name="'Circulation'">
            <div class="intervention-list-item">
                <p class="description">
                    Intraveneuze catheter grijs
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Intraveneuze catheter grijs')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Intraveneuze catheter groen
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Intraveneuze catheter groen')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Intraveneuze catheter roze
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Intraveneuze catheter roze')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Botnaald
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Botnaald')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Urinecatheter
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Urinecatheter')">
                    Toepassen
                </button>
            </div>
        </intervention-list>

        <intervention-list :tag="'d'" :name="'Disabilities'">
            <div class="intervention-list-item">
                <p class="description">
                    Point-of-care glucose
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Point-of-care glucose')">
                    Toepassen
                </button>
            </div>
        </intervention-list>

        <intervention-list :tag="'e'" :name="'Exposure/environnement'">
            <div class="intervention-list-item">
                <p class="description">
                    Deken
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Deken')">
                    Toepassen
                </button>
            </div>
            <div class="intervention-list-item">
                <p class="description">
                    Thermometer
                </p>
                <button
                    type="button"
                    class="red-button"
                    @click="sendAction('Thermometer')">
                    Toepassen
                </button>
            </div>
        </intervention-list>

    </div>
</template>

<script>
import InterventionList from '@/components/game/patient-tabs/InterventionList';
import {bus} from "@/main";

export default {
    name: "InterventionTab",
    methods:{
      sendAction(message){
          bus.$emit('SEND_ACTION', {'type': 'intervention', 'message': message});
      }
    },
    components:{
        InterventionList
    }
}
</script>

<style lang="scss" scoped>
    .intervention-list-item{
        background: white;
        padding: 8px 12px 8px 20px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        box-shadow: rgba(47, 72, 88, 8%) 0 2px 8px;

        .description{
            font-weight: bold;
            color: #2F4858;
        }

        .red-button{
            background-color: #F3726A;
            font-weight: bold;
            color: white;
            border: 0;
            padding: 5px 12px;
            border-radius: 25px;
            margin-left: auto;
            transition: all 0.1s ease-in-out;

            &:hover, &:active{
                cursor: pointer;
                background-color: darken(#F3726A, 20%);
            }
        }
    }
</style>