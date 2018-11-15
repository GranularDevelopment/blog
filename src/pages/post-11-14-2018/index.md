---
title: Xamarin Forms Query Android Contacts' Company 
date: "2018-11-14T04:12:03.284Z"
---

How to get the company field of one of your contacts? 

``` csharp


void FillContacts ()
{
   var uri = ContactsContract.Contacts.ContentUri;
   string[] projection = {
       ContactsContract.Contacts.InterfaceConsts.Id,
       ContactsContract.Contacts.InterfaceConsts.DisplayName,
       ContactsContract.Contacts.InterfaceConsts.PhotoId
  };
   // CursorLoader introduced in Honeycomb (3.0, API11)
   var loader = new CursorLoader(activity, uri, projection, null, null, null);
   var cursor = (ICursor)loader.LoadInBackground();
   contactList = new List<Contact> ();
   if (cursor.MoveToFirst ()) {
      do {
          contactList.Add (new Contact{
              Id = cursor.GetLong (cursor.GetColumnIndex (projection [0])),
              DisplayName = cursor.GetString (cursor.GetColumnIndex (projection [1])),
              PhotoId = cursor.GetString (cursor.GetColumnIndex (projection [2]))
              Company = getCompany(Id)

          });
       } while (cursor.MoveToNext());
   }
}
 private String getCompanyName (String contactId)
        {
            // Get Organizations
            String orgName = null;
            String orgWhere = ContactsContract.Contacts.Data.InterfaceConsts.RawContactId + " = ? AND "
                    + ContactsContract.Data.InterfaceConsts.Mimetype + " = ?";
            String [] orgWhereParams = new String []{contactId,
                ContactsContract.CommonDataKinds.Organization.ContentItemType};
            var orgCur = Application.Context.ContentResolver.Query(ContactsContract.Data.ContentUri, null,
                    orgWhere, orgWhereParams, null);
            if (orgCur.MoveToFirst ()) {
                orgName = orgCur.GetString (orgCur.GetColumnIndex (ContactsContract.CommonDataKinds.Organization.Company)) ;
            }
            return orgName;
        }

```