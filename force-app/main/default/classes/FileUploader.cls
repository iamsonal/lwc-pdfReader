public with sharing class FileUploader {

    @AuraEnabled(cacheable=true)
    public static String fetchAttachment() {
        Attachment a = [SELECT Body FROM Attachment WHERE Id='0012E000023eHwlQAE' LIMIT 1];
        return EncodingUtil.Base64Encode(a.Body);
    }
}