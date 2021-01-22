<template>
    <ModalWrapper>
        <div class="modal-content">
            <h2>Overdracht Ambulance</h2>
            <p>
                S = Mw. Verhaag, 65 jaar. Presentatie op SEH op verzoek van de huisarts i.v.m. dyspneu en koorts, verdenking
                pneumosepsis.
                <br><br>
                B = Mogelijk allergisch voor penicilline. Medicatie: antihypertensiva, diuretica, statine, insuline, pufjes.
                Bekend met diabetes, hypertensie, hoog cholesterol, COPD.
                <br><br>
                A = lage sat (90%), na start 15L O2 via NRM sat 96%. Hypotensief (RR 88/54mmHg, p100bpm), na fluid challenge
                NaCl 0,9% 500cc RR 100/64mmHg, p 88bpm.
                <br><br>
                Werkdiagnose: Pneumosepsis
                <br><br>
                R = Opvang door SEH arts of internist volgens sepsisprotocol.
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