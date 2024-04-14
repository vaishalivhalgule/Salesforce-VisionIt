public with sharing class createAccountRecord {
    @AuraEnabled
    public static Account createRecord(Account acc) {
        insert acc;
        return acc;
    }
}