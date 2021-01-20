<template>
    <ModalWrapper>
        <div class="modal-content">
            <h2>Overdracht SBAR Ambulance Duo</h2>
            <p>
                S = Mw. Verhaag, 65 jaar. Presentatie op SEH op verzoek van de huisarts i.v.m. dyspneu en koorts, verdenking
                pneumosepsis. Dan de ABCDE zoals die er nu staat minus de interventies (dus de dingen die nu tussen haakjes
                staan).
                <br><br>
                B = Mogelijk allergisch voor penicilline. Medicatie: antihypertensiva, diuretica, statine, insuline, pufjes.
                Bekend met diabetes, hypertensie, hoog cholesterol, COPD.
                <br><br>
                A = lage sat (90%), na start 15L O2 via NRM sat 96%. Hypotensief (RR 88/54mmHg, p100bpm), na fluid challenge
                NaCl 0,9% 500cc RR 100/64mmHg, p 88bpm. O.v.v. pneumosepsis nu ingestuurd voor beoordeling en behandeling op
                de SEH.
                <br><br>
                R = lage saturatie waarvoor
            </p>
        </div>
    </ModalWrapper>
</template>

<script>
import ModalWrapper from '@/components/ModalWrapper';

export default {
    name: "TaskMessageModal",
    components: {
        ModalWrapper
    }
}
</script>

<style lang="scss" scoped>
    .modal-content {
        padding: 16px 12px 32px;
        background: #F2F2F2;
        font-size: 14px;

        h2{
            font-size: 20px;
            color:#f3726a;
            margin-bottom: 12px;
        }
    }
</style>